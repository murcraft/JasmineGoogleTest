'use strict'
// const {Key, until} = require('selenium-webdriver')
let EC = protractor.ExpectedConditions


class BasePage {

  constructor () {
    browser.waitForAngularEnabled(false)
  }

  async navigate (targetUrl) {
    browser.get(targetUrl)
    return this
  }

  async getPageTitle (title) {
    await this.isContainTitle(title)
    return await browser.getTitle()
  }

  async isContainTitle(title) {
    return await EC.titleIs(title)
  }

  async isInDom(locator){
    return await EC.presenceOf(locator)
  }

  async findElementBy (locatorName) {
    return await browser.findElement(locatorName)
  }

  async waitForElementsBy (locatorName) {
    return await browser.wait(until.elementsLocated(locatorName))
  }

  async getElementText (locatorName) {
    const element = await this.findElementBy(locatorName)
    return await element.getText()
  }

  async sendKeysInField (locatorName, requestText) {
    await locatorName.sendKeys(requestText)
    await locatorName.sendKeys(protractor.Key.ENTER)
    // await element.sendKeys(requestText, Key.RETURN)
  }

  async sendKeysInField1 (locatorName, requestText) {
    // const el = await this.findElementBy(locatorName)
    await locatorName.sendKeys(requestText)
    await locatorName.sendKeys(Key.ENTER).perform()
  }

}

module.exports = BasePage