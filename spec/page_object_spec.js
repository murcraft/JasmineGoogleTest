let searchPage = require("../lib/page/SearchPage");
let resultsPage = require("../lib/page/ResultsPage");

console.log('start', resultsPage);

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
        console.log(searchPage);
        expect(title.toLowerCase()).toEqual("google");
    });

    it("Go to results page", async function () {
        resultsPage = await searchPage.textRequireInField();
        let title = await resultsPage.getPageTitle();
        console.log(title);
        expect(title.toLowerCase()).toMatch("itechart");
    });

    it("Searching ITechArt titles in resuls", async function () {
        console.log('ssssssssss', resultsPage);
        let titles = await resultsPage.getResulsHeaders();
        await console.log(titles);
        let size = await resultsPage.getNumberOfResults();
        await console.log("Number of RESULTS in method: ", size);
        titles.forEach(value => {
            expect(value).toMatch("iTechArt");
        });

    });

    it('Searching common amount of results in page', async function () {
        let results = await resultsPage.getNumberOfResults();
        expect(results).toBeGreaterThan(10000);
    });


});