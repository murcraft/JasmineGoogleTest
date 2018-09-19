const {By, Key, until} = require('selenium-webdriver');

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
        const titlePage = await driver.getTitle();
        return titlePage;
    }

    async getElementById(idName) {
        const selector = await driver.findElement(By.id(idName));
        return selector;
    }

    async waitForElementsById(idName) {
        const selector = await this.getElementById(idName);
        const result = await driver.wait(until.elementsLocated(selector));
        return result;
    }

    async getTextOfElement(idName) {
        const text = await driver.findElement(By.id(idName)).getText();
        return text;
    }

    async waitForElementsByCss(cssName) {
        const selector = await driver.By.css(cssName);
        const result = await this.waitForElements(selector, cssName);
        return result;
    }

    async sendKeysInField(elementName, requestText) {
        await driver.findElement(By.name(elementName)).sendKeys(requestText, Key.RETURN);
     }

    async waitForElementsByXpath(xpathName) {
        const selector = await driver.wait(until.elementsLocated(By.xpath(xpathName)));
        return selector;
    }

    async getResulsHeaders(titlesLocator) {
        const selctor = await this.waitForElementsByXpath(titlesLocator);
        let titelsArray = await selctor.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        return titles;
    }

}

module.exports = BasePage;