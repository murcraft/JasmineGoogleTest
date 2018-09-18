const BasePage = require("./BasePage");
const {By, Key, until} = require('selenium-webdriver');

const resultsTitles = By.xpath("//div[@class='rc']/h3");

class ResultsPage extends BasePage {
    constructor(){
        super();
    }

    async getResulsHeaders() {
        let elementsTitlePromises = await driver.wait(until.elementsLocated(resultsTitles));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        return titles;
    }
}
module.exports = new ResultsPage();
