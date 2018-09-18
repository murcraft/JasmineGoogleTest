const webdriver = require('chromedriver');
const { Builder } = require('selenium-webdriver');

class InitDriver {
    constructor() {
    };

    static getDriver() {
        if (null == driver) {
            driver = new webdriver.Builder().forBrowser('chrome').build();
            driver.manage().setTimeouts({implicit: 5000});
        }
        return driver;
    }

    static async closeDriver() {
        await driver.quit();
        driver = null;
    };
}

module.exports = InitDriver;