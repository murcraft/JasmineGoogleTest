'use strict'
require('chromedriver')
const webdriver = require('selenium-webdriver')

let driver = null

class DriverHandler {
  constructor () {
  };

  static async GetInstance () {
    if (null == driver) {
      driver = await new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
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