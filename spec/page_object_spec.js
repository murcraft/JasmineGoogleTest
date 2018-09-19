let SearchPage = require("../lib/page/SearchPage");
let ResultsPage = require("../lib/page/ResultsPage");
let DriverHandler = require("../lib/driver/DriverHandler");

let searchPage;
let resultsPage;
let driver = null;
const expectTitleSearchingPage = "google";
const expectTitleResultsPage = "itechart";

describe("Test searching on Google", function () {

  beforeAll(async function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    driver = await DriverHandler.GetInstance();
    searchPage = new SearchPage(driver);
  });

  afterAll(async function () {
    await DriverHandler.CloseDriver();
  });

  it("Check main page", async function () {
    await searchPage.openPage();
    let titleOfSearchingPage = await searchPage.getPageTitle();
    await expect(titleOfSearchingPage.toLowerCase()).toBe(expectTitleSearchingPage);
  });

  it("Check results page", async function () {
    await searchPage.textRequireInField();
    resultsPage = await new ResultsPage(driver);
    let titleOfResultsPage = await resultsPage.getPageTitle();
    await expect(titleOfResultsPage.toLowerCase()).toMatch(expectTitleResultsPage);
  });

  it("Searching ITechArt titles in results", async function () {
    let titles = await resultsPage.getResulsHeaders();
    await resultsPage.printResultsHeaders();
    titles.forEach(async value => {
      await expect(value.toLowerCase()).toMatch("itechart");
    });

  });

  it("Searching common amount of results", async function () {
    let results = await resultsPage.getNumberOfResults();
    await resultsPage.printNumberOfResults();
    await expect(results).toBeGreaterThan(10000);
  });


});