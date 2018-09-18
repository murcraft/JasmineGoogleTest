const ResultsPage = require("../../lib/page/basepage");
const BasePage = require("../../lib/page/basepage");
const {By, Key, until, wait} = require('selenium-webdriver');

const inputSearchElement = By.name('q');

class SearchPage extends BasePage {

    async textRequireInField(){
        let promise = await driver.wait(until.elementLocated(inputSearchElement));
        await promise.sendKeys("ITechArt", Key.RETURN);
        return new ResultsPage();
    }

 }

module.exports = new SearchPage();