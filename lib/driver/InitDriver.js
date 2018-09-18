require("chromedriver");
var webdriver = require('selenium-webdriver');
var driver;

class InitDriver {
    constructor() {
    };

    static getDriver() {
        if (null == driver) {
            driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).build();
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