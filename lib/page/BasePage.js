const {By, Key, until} = require('selenium-webdriver');

class BasePage {

  constructor(driver) {
    global.driver = driver;
  }

  async openPage(Url) {
    await driver.get(Url);
  }

  async closePage() {
    await driver.quit();
  }

  async getPageTitle() {
    return await driver.getTitle();
  }

  async getElementById(idName) {
    return await driver.findElement(By.id(idName));
  }

  async getTextOfElement(idName) {
    return await driver.findElement(By.id(idName)).getText();
  }

  async sendKeysInField(elementName, requestText) {
    await driver.findElement(By.name(elementName)).sendKeys(requestText, Key.RETURN);
  }

  async waitForElementsByXpath(xpathName) {
    return await driver.wait(until.elementsLocated(By.xpath(xpathName)));
  }

  async getResulsHeaders(titlesLocator) {
    const selector = await this.waitForElementsByXpath(titlesLocator);
    let titelsArray = await selector.map(async result => {
      return result.getText();
    });
    return await Promise.all(titelsArray);
  }
// >>>>>>> page

}

module.exports = BasePage;