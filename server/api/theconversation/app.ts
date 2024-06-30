import { Handler } from 'aws-lambda';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

import { THECONVERSATION_URL_CA } from './config';

export const lambdaHandler: Handler = async (): Promise<void> => {
    const browser = await puppeteer.launch({ headless: 'shell' });
    const page = await browser.newPage();

    await page.goto(THECONVERSATION_URL_CA);
    await page.screenshot({ path: 'example.png' });
    const html = await page.content();
    console.log(html);

    await browser.close();
};
