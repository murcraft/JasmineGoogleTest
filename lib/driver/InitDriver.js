require('chromedriver');
const {Builder} = require('selenium-webdriver');

class InitDriver {
    constructor() {
    };

    static getDriver() {
        if (null == this.driver) {
            this.driver = new Builder().forBrowser('chrome').build();
            this.driver.manage().setTimeouts({implicit: 5000});
        }
        return this.driver;
    }

    static async closeDriver() {
        await this.driver.quit();
        this.driver = null;
    };
}

module.exports = InitDriver;