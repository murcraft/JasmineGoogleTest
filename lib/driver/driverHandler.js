'use strict'
require('chromedriver')
require('geckodriver')
const {Builder} = require('selenium-webdriver')
const args = require('yargs').argv
const browser = args.browserName || 'chrome'
let driver = null

class DriverHandler {
  constructor () {
  };

  static async GetInstance () {
    if (null == driver) {
      driver = await new Builder().forBrowser(browser).build()
      await driver.manage().setTimeouts({implicit: 5000})
    }
    return await driver
  }

  static async CloseDriver () {
    await driver.quit()
    driver = await null
  };
}

module.exports = DriverHandler