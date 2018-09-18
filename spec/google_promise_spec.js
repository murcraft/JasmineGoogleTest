require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

const URL = "http://www.google.by";
const headersResultsPath = "//div[@class='rc']/h3";

describe("Test enter on Google", function() {

    beforeAll(function (done) {
        this.driver = new Builder().forBrowser('chrome').build();
        this.driver.get(URL).then(done);
    });

    afterAll(function(done) {
        this.driver.quit().then(done);
    });

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    it("Go to results page", function(done) {
        let searchField = this.driver.findElement(By.name('q'));
        searchField.sendKeys('ITechArt', Key.RETURN)
        .then( resolve => {
            return this.driver.getTitle();
        })
        .then ( resolve => {
            console.log("Enter text..." + resolve);
            expect(resolve.toLowerCase()).toContain("itechart");
        })
        .then(done);

    });

    it("Searching ITechArt titles in resuls", function(done) {
        this.driver.wait(until.elementsLocated(By.xpath(headersResultsPath)))
        .then ( resolve => {
            let titelsArray = resolve.map( function( result ){
                return result.getText();
            });
            return Promise.all(titelsArray);
        })
        .then( resolve => {
            console.log("Number of results after: " + resolve.length);
            console.log(resolve);

            resolve.forEach(value => {
                expect(value.toLowerCase()).toMatch("itechart");
            });
        })
        .then(done);

    });

    it('Searching common amount of results in page', function (done) {
        this.driver.findElement(By.id("resultStats"))
        .then(resolve => {
            return resolve.getText();
        })
        .then ( resolve => {
            let numberOfResults = resolve.split(" ").join("").match("(\\d+)([^(,])");
            console.log("Number of results: " + numberOfResults[0]);
            expect(numberOfResults[0]).toBeGreaterThan(10000);
        })
        .then(done);
    });


});