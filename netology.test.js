let page;
jest.setTimeout(90 * 1000);

beforeEach(async () => {
  page = await browser.newPage();
  page.setDefaultNavigationTimeout(50000)
});

afterEach(() => {
  page.close();
});

describe("Netology page tests", () => {

  beforeEach(async () => {
    await page.goto("https://netology.ru/");
  });

  test("click on the link cyber monday", async () => {
    const firstLink = await page.$(
      "[class = 'src-Landings-components-Banner--showMoreButton--6cFzg']");
    await firstLink.click();
    await page.waitForTimeout(3000);

    const titleSelector = "[class = 'src-Landings-modals-Sale--title--b4LH8']";
    const actual = await page.$eval(titleSelector, link => link.textContent);

    expect(actual).toContain("Кибер-понедельник в Нетологии");
  });

    test("click on the link study for free", async () => {
    const firstLink = await page.$(
      "[class = 'node_modules-@netology-shared-src-reallyShared-components-Header--link--M2Sso node_modules-@netology-shared-src-reallyShared-components-Header--hideMdDown--s59p5']");
    await firstLink.click();
    await page.waitForTimeout(40000);

    const secondLink = await page.$("[class = 'popmechanic-close']");
    await secondLink.click();
    await page.waitForTimeout(3000);

    const titleSelector = "[class = 'src-Landings-pages-FreeProducts-components-Presentation--title--BtQA3']";
    const actual = await page.$eval(titleSelector, link => link.textContent);
    
    expect(actual).toContain('Бесплатные');
  });

    test("click on the link netology media", async () => {
    const firstLink = await page.$(
      "[class = 'node_modules-@netology-shared-src-reallyShared-components-Header--link--M2Sso']");
    await firstLink.click();
    await page.waitForTimeout(3000);

    const actual = await page.title();
   
    expect(actual).toEqual('Медиа Нетологии: об образовании в диджитале');
  });
  
});