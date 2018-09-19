let searchPage = require("../lib/page/SearchPage");
let resultsPage = require("../lib/page/ResultsPage");

describe("Test searching on Google", function() {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    afterAll(async function(){
       await resultsPage.closePage();
    });

    it("Check main page", async function () {
        await searchPage.openPage();
        let title = await searchPage.getPageTitle();
        console.log("Title of main page: ", title);
        expect(title.toLowerCase()).toEqual("google");
    });

    it("Check results page", async function () {
        resultsPage = await searchPage.textRequireInField();
        let title = await resultsPage.getPageTitle();
        console.log("Title of main page: ", title);
        expect(title.toLowerCase()).toMatch("itechart");
    });

    it("Searching ITechArt titles in results", async function () {
        let titles = await resultsPage.getResulsHeaders();
        await console.log(titles);
        let size = await resultsPage.getNumberOfResults();
        await console.log("Number of results: ", size);
        titles.forEach(value => {
            expect(value.toLowerCase()).toMatch("itechart");
        });

    });

    it("Searching common amount of results", async function () {
        let results = await resultsPage.getNumberOfResults();
        expect(results).toBeGreaterThan(10000);
    });


});