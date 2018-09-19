const {By} = require('selenium-webdriver');
const BasePage = require("./BasePage");

const titlesLocator = By.xpath("//div[@class='rc']/h3");
const idName = By.id("resultStats");

class ResultsPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

  async getResulsHeaders() {
    const selector = await super.waitForElementsByXpath(titlesLocator);
    let titlesArray = await selector.map(async result => {
      return result.getText();
    });
    return await Promise.all(titlesArray);
  }

  async printResultsHeaders() {
    let titles = await this.getResulsHeaders();
    console.log("Results on the first page:\n", titles);
  }

  async getNumberOfResults() {
    let numberOfRes = await super.getTextOfElement(idName);
    let numberOfResults = await numberOfRes.split(" ").join("").match("(\\d+)([^(,])");
    console.log("Number of results: ", numberOfResults[0]);
    return numberOfResults[0];
  }

}

module.exports = ResultsPage;
