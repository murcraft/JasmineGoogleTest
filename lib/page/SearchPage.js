require("selenium-webdriver");
// import BasePage from "../lib/page/basepage";
const BasePage = require("../../lib/page/basepage");
const Url = "http://www.google.by";

class SearchPage extends BasePage {
    constructor (driver) {
        super(driver);
        const titleContent = "Google";
    }

    openPage() {
        const driver = this.driver;
        driver.get(Url);
    }

    getPageTitle(){
        let titlePage = driver.getTitle();
        return titlePage;
    }

    textRequireInField(){
        driver.findElement(By.name('q')).sendKeys("ITechArt", Key.RETURN);
        return new ResultsPage(driver);
    }

 }

module.exports = SearchPage;