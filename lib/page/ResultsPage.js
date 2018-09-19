const BasePage = require("./BasePage");

const titlesLocator = "//div[@class='rc']/h3";
const idName = "resultStats";

class ResultsPage extends BasePage {

    constructor(driver){
        super(driver);
    }

    async isSuitablePageTitle(titlePage){
        let currentPageTitle = await super.getPageTitle();
        if (currentPageTitle.toLowerCase().match(titlePage)) {
            return true;
        }
        return false;
    }

    async getResulsHeaders() {
        let titles = super.getResulsHeaders(titlesLocator);
        return titles;
    }

    async printResultsHeaders(){
        let titles = await this.getResulsHeaders();
        console.log("Results on the first page:\n", titles);
    }

    async searchCommonResult(){
        let allResults = await super.getTextOfElement(idName);
        return allResults;
    }

    async getNumberOfResults(){
        let numberOfRes = await this.searchCommonResult();
        let numberOfResults = await numberOfRes.split(" ").join("").match("(\\d+)([^(,])");
        return numberOfResults[0];
    }

    async printNumberOfResults(){
        let number = await this.getNumberOfResults();
        console.log("Number of results: ", number);
    }
}

module.exports = ResultsPage;
