var searchPage = require("../lib/page/SearchPage");
var resultsPage = require("../lib/page/ResultsPage");


describe("Test searching on Google", function() {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    it("Check main page", async function () {
        await searchPage.openPage();
        let title = await searchPage.getPageTitle();
        console.log(title);
        expect("Google").toBe(title);
    });

    it("Go to results page", async function () {
        resultsPage = await searchPage.textRequireInField();
        let title = await resultsPage.getPageTitle();
        console.log(title);
        expect(title.toLowerCase()).toMatch("itechart");
    });


});