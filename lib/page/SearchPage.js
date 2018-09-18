const ResultsPage = require("../../lib/page/basepage");

const BasePage = require("../../lib/page/basepage");

const {By, Key, until} = require('selenium-webdriver');

class SearchPage extends BasePage {

    async getPageTitle(){
        let titlePage = await driver.getTitle();
        return titlePage;
    }

    async textRequireInField(){
        let promise = await driver.findElement(By.name('q'));
        await promise.sendKeys("ITechArt", Key.RETURN);
        return new ResultsPage(driver);
    }

 }

module.exports = new SearchPage();