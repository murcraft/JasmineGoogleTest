'use strict'
const {Key, until} = require('selenium-webdriver')

class BasePage {

  constructor (driver) {
    this.driver = driver
  }

  async navigate (targetUrl) {
    await this.driver.navigate().to(targetUrl)
  }

  async getPageTitle () {
    return await this.driver.getTitle()
  }

  async waitPageTitle (pageTitle) {
    await this.driver.wait(until.titleContains(pageTitle.toLowerCase()))
  }

  async findElementBy (locatorName) {
    return await this.driver.findElement(locatorName)
  }

  async waitForElementsBy (locatorName) {
    return await this.driver.wait(until.elementsLocated(locatorName))
  }

  async getElementText (locatorName) {
    const element = await this.findElementBy(locatorName)
    return await element.getText()
  }

  async sendKeysInField (locatorName, requestText) {
    const element = await this.findElementBy(locatorName)
    await element.sendKeys(requestText, Key.RETURN)
  }

}

module.exports = BasePage