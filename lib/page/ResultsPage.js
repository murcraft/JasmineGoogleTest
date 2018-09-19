const BasePage = require("./BasePage");
const titlesLocator = "//div[@class='rc']/h3";
const idName = "resultStats";

class ResultsPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

/*  async getResulsHeaders() {
    return super.getResulsHeaders(titlesLocator);
  }*/

  async getResulsHeaders() {
    const selector = await super.waitForElementsByXpath(titlesLocator);
    let titelsArray = await selector.map(async result => {
      return result.getText();
    });
    return await Promise.all(titelsArray);
  }

  async printResultsHeaders() {
    let titles = await this.getResulsHeaders();
    console.log("Results on the first page:\n", titles);
  }

  async searchCommonResult() {
    return await super.getTextOfElement(idName);
  }

  async getNumberOfResults() {
    let numberOfRes = await this.searchCommonResult();
    let numberOfResults = await numberOfRes.split(" ").join("").match("(\\d+)([^(,])");
    return numberOfResults[0];
  }

  async printNumberOfResults() {
    let number = await this.getNumberOfResults();
    console.log("Number of results: ", number);
  }
}

module.exports = ResultsPage;
