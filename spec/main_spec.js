const SearchPage = require("../lib/page/SearchPage");
let InitDriver = require("../lib/driver/InitDriver");

const driver = new InitDriver.getDriver();

describe("Test searching on Google", function() {

    beforeAll(async function () {
        this.searchPage = new SearchPage(driver);
    });

    afterAll(async function () {
        await driver.closeDriver();
    });

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });


    it("Go to results page", async function () {
        this.searchPage.openPage();
    });


});