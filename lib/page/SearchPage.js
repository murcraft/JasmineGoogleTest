class SearchPage extends BasePage {
    constructor (webdriver, driver, Url = "http://www.google.by") {
        super(webdriver, driver);
        const titleContent = "Google";
    }

    async openPage() {
        await this.driver.get(Url);
    }

    async getPageTitle(){
        let titlePage = await this.driver.getTitle();
        return titlePage;
    }

    async textRequireInField(){
        const promise = await this.driver.findElement(By.name('q'));
        promise.sendKeys("ITechArt", Key.RETURN);
        return new ResultsPage(webdriver, driver);
    }

 }

module.exports = SearchPage;