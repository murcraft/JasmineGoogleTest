'use strict'
let EC = protractor.ExpectedConditions;

class BasePage {
  constructor (){
    browser.waitForAngularEnabled(false);
  }

  async navigate (targetUrl) {
    await browser.get(targetUrl)
    return await this
  }

  async getPageTitle () {
    return browser.getTitle()
  }

  async sendKeysInField (locatorName, requestText) {
    // const el = await this.findElementBy(locatorName)
    await locatorName.sendKeys(requestText)
    await locatorName.sendKeys(Key.ENTER).perform()
  }

  async waitPageTitle (pageTitle) {
    // await browser.wait(EC.titleContains(pageTitle))
    await console.log(browser.getTitle())
    // await browser.wait(until.titleContains(pageTitle))
  }

  async findElementBy (locatorName) {
    return await element(locatorName)
  }

  async waitForElementsBy (locatorName) {
    return await browser.waitForElementsBy(locatorName)
  }

  isVisible(locator) {
    return protractor.ExpectedConditions.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return protractor.ExpectedConditions.invisibilityOf(locator);
  }

  inDom(locator) {
    return protractor.ExpectedConditions.presenceOf(locator);
  }

  notInDom(locator) {
    return protractor.ExpectedConditions.stalenessOf(locator);
  }

  isClickable(locator) {
    return protractor.ExpectedConditions.elementToBeClickable(locator);
  }

  isContaintitle(title) {
    return protractor.ExpectedConditions.titleIs(title);
  }

  hitEnter() {
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  /*
    async getElementText (locatorName) {
      const el = await this.findElementBy(locatorName)
      return await el.getText()
    }

    async sendKeysInField (locatorName, requestText) {
      const el = await this.findElementBy(locatorName)
      await el.sendKeys(requestText, Key.RETURN)
    }*/

}

module.exports = BasePage