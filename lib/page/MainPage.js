class MainPage extends BasePage {
    constructor(webdriver, driver, URl, titleContent) {
        super(webdriver, driver);
        this.URL = URL;
        this.titleContent = titleContent;
    }

    async open() {
        await this.driver.get(this.URL);
        await this.waitForTitle();
    }

    async waitForTitle() {
        await this.driver.wait(this.webdriver.until.titleContains(this.titleContent));
    }
}

module.exports = MainPage;