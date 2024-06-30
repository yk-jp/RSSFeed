import { Handler } from 'aws-lambda';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

import { THECONVERSATION_URL_CA } from './config';

export const lambdaHandler: Handler = async (): Promise<void> => {
    console.log('test vvv');
    puppeteer.use(stealthPlugin());
    const browser = await puppeteer.launch({
        args: [...chromium.args, '--disable-gpu'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.goto(THECONVERSATION_URL_CA);
    await page.screenshot({ path: 'example.png' });
    const html = await page.content();

    await browser.close();
};
