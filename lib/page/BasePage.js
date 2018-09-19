const {By, Key, until} = require('selenium-webdriver');

class BasePage {

    constructor(driver) {
        global.driver = driver;
        this.log = myVar => process.stdout.write(`${myVar}\n`);
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

    async getTextOfElement(idName) {
        const text = await driver.findElement(By.id(idName)).getText();
        return text;
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