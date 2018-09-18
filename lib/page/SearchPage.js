const ResultsPage = require("./ResultsPage");
const BasePage = require("./BasePage");
const {By, Key, until, wait} = require('selenium-webdriver');

const Url = "http://www.google.by";
const inputSearchElement = By.name('q');

class SearchPage extends BasePage {

    async openPage() {
        await super.openPage(Url);
    }

    async textRequireInField(){
        let promise = await driver.wait(until.elementLocated(inputSearchElement));
        await promise.sendKeys("ITechArt", Key.RETURN);
        return await ResultsPage;
    }

 }

module.exports = new SearchPage();