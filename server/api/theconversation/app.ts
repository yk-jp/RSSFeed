import { Handler } from 'aws-lambda';
import axios from 'axios';
import cheerio from 'cheerio';

import { THECONVERSATION_URL_CA } from './config';

const fetchNews = async (): Promise<any> => {
    const response = await axios.get(THECONVERSATION_URL_CA);
    const $ = cheerio.load(response.data);
    const res = [];

    const sections = $('[data-testid="grid"]');
    const first7Sections = sections.slice(0, 7).get();

    first7Sections.forEach((section) => {
        const newsDivs = $(section).find(`div[data-testid="ImmutableGridSlot"]`);

        newsDivs.each((index, news) => {
            let title = $(news).find('h3 span').text();
            if (!title) {
                title = $(news).find('h5 span').text();
            }
            const link = $(news).find('a').attr('href');
            const image = $(news).find('img').attr('src');
            res.push({ title, link, image });
        });
    });

    return res;
};

export const lambdaHandler: Handler = async (): Promise<void> => {
    const news = await fetchNews();
    console.log(news);
    console.log(news.length);
};
