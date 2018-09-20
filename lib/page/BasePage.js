'use strict';
const {By, Key, until} = require('selenium-webdriver');

class BasePage {

  constructor(driver) {
    this.driver = driver;
  }

  async navigate(targetUrl) {
    await this.driver.navigate().to(targetUrl);
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }

  async findElementBy(locatorName){
    return await this.driver.findElement(locatorName);
  }

  async waitForElementsBy(locatorName) {
    return await this.driver.wait(until.elementsLocated(locatorName));
  }

  async getTextElement(locatorName){
    const element = await this.findElementBy(locatorName);
    return await element.getText();
  }

  async sendKeysInField(locatorName, requestText) {
    const element = await this.findElementBy(locatorName);
    await element.sendKeys(requestText, Key.RETURN);
  }

  async waitForElementLocatedBy(locatorName){
    await this.driver.wait(until.elementLocated(locatorName));
  }

}

module.exports = BasePage;