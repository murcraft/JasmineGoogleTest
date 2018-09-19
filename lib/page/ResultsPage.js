const BasePage = require("./BasePage");
const {By, until} = require('selenium-webdriver');

const resultsTitles = By.xpath("//div[@class='rc']/h3");

class ResultsPage extends BasePage {

    async getResulsHeaders() {
        let elementsTitlePromises = await driver.wait(until.elementsLocated(resultsTitles));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        return titles;
    }

    async getNumberOfResults(){
        let size = await this.getResulsHeaders();
        let sizeLength = size.length;
        return sizeLength;
    }

    async searchCommonResult(){
        let allResults = await driver.findElement(By.id("resultStats")).getText();
        return allResults;
    }

    async getNumberOfResults(){
        let numberOfRes = await this.searchCommonResult();
        let numberOfResults = await numberOfRes.split(" ").join("").match("(\\d+)([^(,])");
        return numberOfResults[0];
    }
}
module.exports = new ResultsPage();
