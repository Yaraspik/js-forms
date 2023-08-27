// eslint-disable-next-line import/no-extraneous-dependencies
import puppeteer from 'puppeteer';
import { fork } from 'child_process';

describe('Page start', () => {
  let browser;
  let page;
  let server;

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');

    const button = await page.$('.button');
    await button.click();

    await page.waitForSelector('.popover');
  });

  afterEach(async () => {
    await browser.close();
    await server.kill();
  });
});
