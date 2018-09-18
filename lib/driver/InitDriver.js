require('chromedriver');
const {Builder, By, Key, until } = require('selenium-webdriver');
let driver = require('selenium-webdriver');

class InitDriver {
    constructor() {
    };

    static getDriver() {
        if (null == driver) {
            driver = new Builder().forBrowser('chrome').build();
            driver.manage().setTimeouts({implicit: 5000});
        }
        return driver;
    }

    static async closeDriver() {
        await this.driver.quit();
        this.driver = null;
    };
}

module.exports = InitDriver;