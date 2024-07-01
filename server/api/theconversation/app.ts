import { Handler } from 'aws-lambda';
import axios from 'axios';
import cheerio from 'cheerio';

import { THECONVERSATION_URL_CA } from './config';
import { News } from './types';

const fetchNews = async (): Promise<News[]> => {
    const response = await axios.get(THECONVERSATION_URL_CA);
    const $ = cheerio.load(response.data);
    const res: News[] = [];

    const sections = $('[data-testid="grid"]');
    const hotTopicSections = sections.slice(0, 7).get();

    hotTopicSections.forEach((section) => {
        const newsDivs = $(section).find(`div[data-testid="ImmutableGridSlot"]`);

        newsDivs.each((_, news) => {
            const link = $(news).find('a').attr('href');

            if (!link) {
                return;
            }

            let title = $(news).find('h3 span').text();
            let image = $(news).find('img').attr('src');

            if (!title) {
                title = $(news).find('h5 span').text();
            }

            if (!image) {
                image = '';
            }

            res.push({ title, link, image });
        });
    });

    return res;
};

export const lambdaHandler: Handler = async (): Promise<void> => {
    const news: News[] = await fetchNews();
    console.log(news);
    console.log(news.length);
};
