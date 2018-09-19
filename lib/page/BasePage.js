const {By, Key, until} = require('selenium-webdriver');

class BasePage {

  constructor(driver) {
    this.driver = driver;
  }

  async openPage(Url) {
    await this.driver.get(Url);
  }

  async closePage() {
    await this.driver.quit();
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }

  async getTextOfElement(idName) {
    return await this.driver.findElement(By.id(idName)).getText();
  }

  async sendKeysInField(elementName, requestText) {
    await this.driver.findElement(elementName).sendKeys(requestText, Key.RETURN);
  }

  async waitForElementsByXpath(xpathName) {
    return await this.driver.wait(until.elementsLocated(By.xpath(xpathName)));
  }

}

module.exports = BasePage;