require("chromedriver");
const {By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const Url = "http://www.google.by";

let driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {

    constructor() {
        global.driver = driver;
    }

    async openPage() {
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

    async waitForElementsByXpath(xpathName) {
        let elementsTitlePromises = await this.driver.wait(until.elementsLocated(By.xpath(xpathName)));
        return elementsTitlePromises;
    }
}

module.exports = BasePage;