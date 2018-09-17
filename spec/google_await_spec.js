const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, Capabilities, until} = require('selenium-webdriver');

const URL = "http://www.google.by";
const headersResultsPath = "//div[@class='rc']/h3";

describe("Test searching on Google", function() {

    describe("Test main page", function () {

        beforeAll(async function (done) {
            let service = await new chrome.ServiceBuilder(path).build();
            chrome.setDefaultService(service);

            this.driver = await new Builder()
                .withCapabilities(Capabilities.chrome()).build();
            await this.driver.get(URL);
            done();
        });

        afterAll(async function (done) {
            await this.driver.quit();
            done();
        });

        it("Go to results page", async function (done) {
            console.log('*********1');
            await this.driver.findElement(By.name('q')).sendKeys("ITechArt", Key.RETURN);
            let titlePage1 = await this.driver.wait(until.elementLocated(By.id("resultStats")));
            let titlePage = await this.driver.getTitle();
            console.log("Title..." + titlePage);

            expect(titlePage.toLowerCase()).toMatch("itechart");
            done();
        });

        it("Searching ITechArt titles in resuls", async function (done) {
            console.log('*********2');
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
            done();

        });

    });

});