const ResultsPage = require("./ResultsPage");
const BasePage = require("./BasePage");

const Url = "http://www.google.by";
const elementName = 'q';
const requestText = "ITechArt";

class SearchPage extends BasePage {

    async openPage() {
        await super.openPage(Url);
    }


    async isSuitablePageTitle(titlePage){
        const currentPageTitle = await super.getPageTitle();
        if (currentPageTitle.toLowerCase() == titlePage) {
            return true;
        }
        return false;
    }

    async textRequireInField(){
        await super.sendKeysInField(elementName, requestText);
        return await ResultsPage;
    }

 }

module.exports = new SearchPage();