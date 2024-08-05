import { Handler } from 'aws-lambda';
import { BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';

import axios from 'axios';
import cheerio from 'cheerio';

import { dbClient } from '../dbConfig';
import { THECONVERSATION_URL_CA } from './config';
import { News, Result, NullError } from '../types';

const THREE_DAYS_SECONDS = 3 * 24 * 60 * 60; // ttl doesn't work instantly so 3 days means data will be deleted after 3 days + within 48 hours.
const TTL = Math.floor(Date.now() / 1000) + THREE_DAYS_SECONDS;

const fetchHtmlContent = async (): Promise<Result<cheerio.Root>> => {
    const response = await axios.get(THECONVERSATION_URL_CA);

    if (response.status !== 200) {
        return [null, new Error('failed to fetch news')];
    }

    try {
        return [cheerio.load(response.data), null];
    } catch (error) {
        return [null, new Error(`Failed to parse HTML: ${error}`)];
    }
};

/**
 * Extracts the data from the HTML page.
 * @param {$: cheerio.Root} $ - The Cheerio root object representing the HTML page.
 * @return {Promise<Result<News[]>>} A Promise that resolves to a Result object containing
 * the extracted News array and a possible error.
 */
const extractData = async ($: cheerio.Root): Promise<Result<News[]>> => {
    const sections = $('[data-testid="grid"]');
    const hotTopicSections = sections.slice(0, 7).get();

    const res: News[] = [];
    hotTopicSections.forEach((section) => {
        const newsDivs = $(section).find(`div[data-testid="ImmutableGridSlot"]`);

        newsDivs.each((_, news) => {
            const link = $(news).find('a').attr('href');
            if (!link) {
                console.error('link not found');
                return;
            }

            const linkTitle: string = link.split('/').pop() as string;
            const id: string = linkTitle.substring(0, 36);

            let title = $(news).find('h3 span').text();
            let image = $(news).find('img').attr('src');

            if (!title) {
                title = $(news).find('h5 span').text();
            }

            if (!image) {
                image = '';
            }

            res.push({ id, title, link, image });
        });
    });

    if (res.length === 0) {
        return [null, new Error('nothing to process')];
    }

    console.log('processed', res.length, 'news items');

    return [res, null];
};

/**
 * Creates a BatchWriteItemCommand for inserting multiple news items into the
 * 'News' table. Maximum number of items per request is 25.
 *
 * @param {News[]} news
 * @return {BatchWriteItemCommand}
 */
const createBulkInsertReq = (news: News[]): BatchWriteItemCommand => {
    news = news.slice(0, 25);

    return new BatchWriteItemCommand({
        RequestItems: {
            News: news.map((item) => ({
                PutRequest: {
                    Item: {
                        id: { S: item.id },
                        title: { S: item.title },
                        link: { S: item.link },
                        image: { S: item.image },
                        expire_at: { N: String(TTL) },
                    },
                },
            })),
        },
    });
};

const saveNewsData = async (query: BatchWriteItemCommand): Promise<NullError> => {
    try {
        await dbClient.send(query);
        return null;
    } catch (error) {
        return new Error(`Failed to save data: ${error}`);
    }
};

export const lambdaHandler: Handler = async (): Promise<void> => {
    const [htmlData, error] = await fetchHtmlContent();

    if (error) {
        console.error(error);
        return;
    }

    const [news, extractError] = await extractData(htmlData);

    if (extractError) {
        console.error(extractError);
        return;
    }

    const req: BatchWriteItemCommand = createBulkInsertReq(news);
    const saveError = await saveNewsData(req);

    if (saveError) {
        console.error(saveError);
        return;
    }
};
