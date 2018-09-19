let SearchPage = require("../lib/page/SearchPage");
let resultsPage = require("../lib/page/ResultsPage");
let DriverHandler = require("../lib/driver/DriverHandler");

let driver = null;
const titlePage = "google";
const titleOfResultsPage = "itechart";

describe("Test searching on Google", function () {

  beforeAll(async function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    driver = await DriverHandler.getInstance();
    this.searchPage = new SearchPage(driver);
  });

  afterAll(async function () {
    await DriverHandler.closeDriver();
  });

  it("Check main page", async function () {
    await this.searchPage.openPage();
    let checkTrue = await this.searchPage.isSuitablePageTitle(titlePage);
    await expect(checkTrue).toBeTruthy();
  });

  it("Check results page", async function () {
    resultsPage = await this.searchPage.textRequireInField();
    let checkTrue = await resultsPage.isSuitablePageTitle(titleOfResultsPage);
    await expect(checkTrue).toBeTruthy();
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