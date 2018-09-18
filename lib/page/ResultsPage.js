const BasePage = require("../../lib/page/basepage");
const {By, Key, until} = require('selenium-webdriver');

class ResultsPage extends BasePage {

    async getResulsHeaders() {
        let elementsTitlePromises = await driver.wait(until.elementsLocated(By.xpath(headersResultsPath)));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        return titles;
    }
}
module.exports = new ResultsPage();
