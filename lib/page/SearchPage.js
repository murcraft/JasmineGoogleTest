const ResultsPage = require("./ResultsPage");
const BasePage = require("./BasePage");

const Url = "http://www.google.by";
const elementName = 'q';
const requestText = "ITechArt";

class SearchPage extends BasePage {

    async openPage() {
        await super.openPage(Url);
    }

    async textRequireInField(){
        await super.sendKeysInField(elementName, requestText);
        return await ResultsPage;
    }

 }

module.exports = new SearchPage();