require("chromedriver");
const {By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const Url = "http://www.google.by";

const resultsTitles = By.xpath("//div[@class='rc']/h3");

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {

    constructor() {
        global.driver = driver;
    }

    async openPage(Url) {
        await driver.get(Url);
    }

    async closePage(){
        await driver.quit();
    }

    async getPageTitle(){
        let titlePage = await driver.getTitle();
        return titlePage;
    }

    async waitForElementsById(idName) {
        const selector = await driver.By.id(idName);
        const result = await this.waitForElements(selector, idName);
        return result;
    }

    async waitForElementsByCss(cssName) {
        const selector = await driver.By.css(cssName);
        const result = await this.waitForElements(selector, cssName);
        return result;
    }

    async waitForElementsByName(elementName) {
        let selector = await driver.wait(until.elementsLocated(By.name(elementName)));
        return selector;
    }

    async waitForElementsByXpath(xpathName) {
        let elementsTitlePromises = await driver.wait(until.elementsLocated(By.xpath(xpathName)));
        return elementsTitlePromises;
    }

    async getResulsHeaders() {
        let elementsTitlePromises = await driver.wait(until.elementsLocated(resultsTitles));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        console.log("Number of results: " + titles.length);
        return titles;
    }

    getNumberOfResults(){
        let size = this.getResulsHeaders().length;
        return size;
    }

    async searchCommonResult(){
        let allResults = await driver.findElement(By.id("resultStats")).getText();
        return allResults;
    }

    getNumberOfResults(){
        let numberOfRes = this.searchCommonResult();
        let numberOfResults = numberOfRes.split(" ").join("").match("(\\d+)([^(,])");
        console.log("Number of results: " + numberOfResults[0]);
        return numberOfResults[0];
    }
}

module.exports = BasePage;