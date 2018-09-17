const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, Capabilities, until} = require('selenium-webdriver');
let webdriver = require('selenium-webdriver');

const URL = "http://www.google.by";
const headersResultsPath = "//div[@class='rc']/h3";

describe("Test searching on Google", function() {

        beforeAll(async function () {
            let service = await new chrome.ServiceBuilder(path).build();
            chrome.setDefaultService(service);

            this.driver = await new Builder()
                .withCapabilities(Capabilities.chrome()).build();
            await this.driver.get(URL);

        });

        afterAll(async function () {
            await this.driver.quit();
        });

        it("Go to results page", async function () {
            await this.driver.findElement(By.name('q')).sendKeys("ITechArt", Key.RETURN);
            let titlePage = await this.driver.getTitle();
            console.log("Title..." + titlePage);

            expect(titlePage.toLowerCase()).toMatch("itechart");

        });

        it("Searching ITechArt titles in resuls", async function () {
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

        });

        it('Searching common amount of results in page', async function () {
            let allResults = await this.driver.findElement(By.id("resultStats")).getText();
            let numberOfResults = allResults.split(" ").join("").match("(\\d+)([^(,])");
            console.log("Number of results: " + numberOfResults[0]);
            expect(numberOfResults[0]).toBeGreaterThan(10000);
        });

});