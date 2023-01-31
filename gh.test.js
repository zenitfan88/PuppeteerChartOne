let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github team page tests", () => {
  
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 10000);

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 10000);

  test("The first link attribute", async () => {;
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
}, 1000);

describe("Github customer stories page tests", () => {

  beforeEach(async () => {
    await page.goto(" https://github.com/customer-stories");
  }, 10000);

  test("click on the link See all stories", async () => {
    const firstLink = await page.$("[class = 'link-mktg text-semibold color-fg-default py-1 f3-mktg']");
    await firstLink.click();
    await page.waitForTimeout(3000);
    const actual = await page.title();
    expect(actual).toContain("GitHub's Success Stories · GitHub");
  }, 6000);

    test("click on the link shopify", async () => {
    const firstLink = await page.$("[class = 'customer-story-card__background rounded overflow-hidden mb-5']");
    await firstLink.click();
    await page.waitForTimeout(3000);
    const titleSelector = "[class = 'h3-mktg mb-6 mb-lg-4']";
    const actual = await page.$eval(titleSelector, link => link.textContent);
    expect(actual).toContain('Shopify keeps pushing eCommerce forward with help from GitHub tools.');
  }, 6000);

    test("click on the link Start a free trial", async () => {
    const firstLink = await page.$("[class = 'sub-nav-mktg-ctas ml-lg-3']");
    await firstLink.click();
    await page.waitForTimeout(3000);
    const titleSelector = "[class = 'mb-4 mb-md-8 container-xl']";
    const actual = await page.$eval(titleSelector, link => link.textContent);
    expect(actual).toContain('Pick your trial plan');
  }, 6000);

});