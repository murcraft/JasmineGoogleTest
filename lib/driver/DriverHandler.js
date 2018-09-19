require("chromedriver");
const webdriver = require('selenium-webdriver');
let driver = null;

class DriverHandler {
    constructor() {
    };

    static async getInstance() {
        if (null == driver) {
            driver = await new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).build();
            await driver.manage().setTimeouts({implicit: 5000});
        }
        return driver;
    }

    static async closeDriver() {
        await driver.quit();
        driver = null;
    };
}

module.exports = DriverHandler;