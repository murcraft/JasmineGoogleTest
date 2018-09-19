const BasePage = require("./BasePage");
const titlesLocator = "//div[@class='rc']/h3";
const idName = "resultStats";

class ResultsPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

  async isSuitablePageTitle(titlePage) {
    let currentPageTitle = await super.getPageTitle();
    return !!currentPageTitle.toLowerCase().match(titlePage);
  }

  async getResulsHeaders() {
    return super.getResulsHeaders(titlesLocator);
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
