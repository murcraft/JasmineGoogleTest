const SearchPage = require("../lib/page/SearchPage");
let InitDriver = require("../lib/driver/InitDriver");

const {Builder, By, Key, until } = require('selenium-webdriver');
const driver = InitDriver.getDriver();
const URL = "http://www.google.by";
const headersResultsPath = "//div[@class='rc']/h3";

describe("Test searching on Google", function() {

    beforeAll(async function () {
        // const driver = InitDriver.getDriver();
        this.searchPage = new SearchPage(driver);
    });

    afterAll(async function () {
        await driver.closeDriver();
    });

  /*  beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    afterEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });*/

    it("Go to results page", async function () {
        this.searchPage.openPage();

    /*    await this.driver.findElement(By.name('q')).sendKeys("ITechArt", Key.RETURN);
        let titlePage = await this.driver.getTitle();
        console.log("Title..." + titlePage);

        expect(titlePage.toLowerCase()).toMatch("itechart");
*/
    });

    /*it("Searching ITechArt titles in resuls", async function () {
        let elementsTitlePromises = await this.driver.wait(until.elementsLocated(By.xpath(headersResultsPath)));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });

        let titles = await Promise.all(titelsArray);
        console.log(titles);

        let size = titelsArray.length;
        console.log("Number of titles: " + size);

        titles.forEach(value => {
            expect(value).toMatch("iTechArt");
        });

    });*/

/*    it('Searching common amount of results in page', async function () {
        let allResults = await this.driver.findElement(By.id("resultStats")).getText();
        let numberOfResults = allResults.split(" ").join("").match("(\\d+)([^(,])");
        console.log("Number of results: " + numberOfResults[0]);

        expect(numberOfResults[0]).toBeGreaterThan(10000);
    });*/

});