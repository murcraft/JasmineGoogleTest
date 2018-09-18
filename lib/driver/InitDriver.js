require('chromedriver');

const {Builder, By, Key, until } = require('selenium-webdriver');


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

    static closeDriver() {
        driver.quit();
        driver = null;
    };
}

module.exports = InitDriver;