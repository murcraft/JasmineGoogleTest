require("chromedriver");
const webdriver = require('selenium-webdriver');
let SearchPage = require("../lib/page/SearchPage");
let resultsPage = require("../lib/page/ResultsPage");

const driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).build();

const titlePage = "google";
const titleOfResultsPage = "itechart";

describe("Test searching on Google", function() {

    beforeAll(async function() {
        searchPage = await new SearchPage(driver);
        await searchPage.openPage();
    });

    afterAll(async function(){
        await resultsPage.closePage();
    });

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    it("Check main page", async function () {
        let checkTrue = await searchPage.isSuitablePageTitle(titlePage);
        expect(checkTrue).toBeTruthy();
    });

    it("Check results page", async function () {
        resultsPage = await searchPage.textRequireInField();
        let checkTrue = await resultsPage.isSuitablePageTitle(titleOfResultsPage);
        expect(checkTrue).toBeTruthy();
    });

    it("Searching ITechArt titles in results", async function () {
        let titles = await resultsPage.getResulsHeaders();
        await resultsPage.printResultsHeaders();
        titles.forEach(value => {
            expect(value.toLowerCase()).toMatch("itechart");
        });

    });

    it("Searching common amount of results", async function () {
        let results = await resultsPage.getNumberOfResults();
        await resultsPage.printNumberOfResults();
        expect(results).toBeGreaterThan(10000);
    });


});