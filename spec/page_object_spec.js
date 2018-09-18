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
        console.log(title);
        expect(title.toLowerCase()).toEqual("google");
    });

    it("Go to results page", async function () {
        resultsPage = await searchPage.textRequireInField();
        console.log(toString.call(resultsPage));
        let title = await resultsPage.getPageTitle();
        console.log(title);
        expect(title.toLowerCase()).toMatch("itechart");
    });

    it("Searching ITechArt titles in resuls", async function () {
        let titles = await resultsPage.getResulsHeaders();
        console.log(titles);
        let size = resultsPage.getNumberOfResults();
        console.log("Number of RESULTS in method: " + size);
        titles.forEach(value => {
            expect(value).toMatch("iTechArt");
        });

    });

    it('Searching common amount of results in page', async function () {
        let results = resultsPage.getNumberOfResults();
        expect(results).toBeGreaterThan(10000);
    });


});