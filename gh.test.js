let page;
jest.setTimeout(60 * 1000);

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

/*describe("Github team page tests", () => {
  
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    await page.waitForTimeout(1000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    await page.waitForTimeout(1000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.waitForTimeout(1000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});*/

describe("Github customer stories page tests", () => {

  beforeEach(async () => {
    await page.goto(" https://github.com/customer-stories");
  });

  test("See all stories", async () => {
    const firstLink = await page.$(".py-1 f3-mktg");
    await firstLink.click();
    await page.waitForTimeout(5000);
    const titleSelector = "body > div.logged-out.env-production.page-responsive.f4 > div.application-main > main > div.border-bottom > div > div > div > h1";
    const actual = await page.$eval(titleSelector, link => link.textContent);;
    expect(actual).toContain('Build like the best teams and businesses.');
  });
});
