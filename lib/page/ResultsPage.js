class ResultsPage extends BasePage {
    constructor(driver){
        super(driver);
    }

    async getPageTitle() {
        let titlePage = await this.driver.getTitle();
        return titlePage;
    }

    async getResulsHeaders() {
        let elementsTitlePromises = await this.driver.wait(until.elementsLocated(By.xpath(headersResultsPath)));
        let titelsArray = await elementsTitlePromises.map(async result => {
            return result.getText();
        });
        let titles = await Promise.all(titelsArray);
        return titles;
    }
}