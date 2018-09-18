require("chromedriver");
const {By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const Url = "http://www.google.by";
var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {

    constructor() {
        global.driver = driver;
    }

    async openPage() {
        await driver.get(Url);
    }

    async getPageTitle(){
        let titlePage = await driver.getTitle();
        return titlePage;
    }

    async clickWhenClickableById(idName) {
        const element = await this.waitForElementByCss(idName);
        await this.clickWhenClickable(element);
    }

    async waitForElementByCss(idName) {
        const selector = this.webdriver.By.css(idName);
        const result = await this.waitForElement(selector, idName);
        return result;
    }

    async clickWhenClickableByName(elementName, waitTimeout = 10000) {
        const element = await this.waitForElementByName(elementName, waitTimeout);
        await this.clickWhenClickable(element, waitTimeout);
    }

    async clickWhenClickable(element, waitTimeout = 10000) {
        await this.driver.wait(this.webdriver.until.elementIsVisible(element), waitTimeout);
        await this.driver.wait(this.webdriver.until.elementIsEnabled(element), waitTimeout);
        await element.click();
    }



    async waitForElementByName(elementName) {
        const selector = this.webdriver.By.name(elementName );
        const result = await this.waitForElement(selector, elementName);
        return result;
    }

    async waitForElement(selector, elementName) {
        let result;
        await this.driver.wait(() =>
            this.driver.findElement(selector)
                .then(
                    (element) => {
                        result = element;
                        return true;
                    },
                    (err) => {
                        if (err.name === 'NoSuchElementError') {
                            return false;
                        }
                        return true;
                    },
                ), waitTimeout, `Unable to find element: ${elementName}`);
        return result;
    }

    async waitForElementsById(idName) {
        const selector = this.webdriver.By.id(idName);
        const result = await this.waitForElements(selector, idName);
        return result;
    }

    async waitForElementsByCss(cssName) {
        const selector = this.webdriver.By.css(cssName);
        const result = await this.waitForElements(selector, cssName);
        return result;
    }

    async waitForElementsByXpath(xpathName) {
        let elementsTitlePromises = await this.driver.wait(until.elementsLocated(By.xpath(xpathName)));
        return elementsTitlePromises;
    }
}

module.exports = BasePage;