import { transitionToNextPage } from '../Transition';
import * as path from 'path';
import puppeteer from 'puppeteer';

describe('transition test', async () => {
  const currentPageUrl = 'https://yahoo.co.jp/';
  const nextPageUrl = 'https://google.com/';

  const pathToExtension = path.join(__dirname, '../../');
  console.log(pathToExtension);
  const browser = await puppeteer.launch({
    headless: 'chrome',
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  console.log('target urls:', currentPageUrl, nextPageUrl);
  test('open url at new window',  () => {
     transitionToNextPage(nextPageUrl, false);
    browser.pages().then((pages) => {
      expect(pages.length).toEqual(1);
      expect(pages[0].url()).toEqual(nextPageUrl);

      console.log(pages.length);
      console.log(pages[0].url());
      browser.close();
    });
  });
  test('open url current tab',  () => {
    transitionToNextPage(nextPageUrl, false);
    browser.pages().then((pages) => {
      expect(pages.length).toEqual(2);
      expect(pages[1].url()).toEqual(nextPageUrl);

      console.log(pages.length);
      console.log(pages[1].url());
      browser.close();
    });
  });
});
