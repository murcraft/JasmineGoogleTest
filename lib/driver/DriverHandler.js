'use strict'
require('chromedriver')
const webdriver = require('selenium-webdriver')

let driver = null

class DriverHandler {
  constructor () {
  };

  static GetInstance () {
    if (null == driver) {
      driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
      driver.manage().setTimeouts({implicit: 15000})
    }
    return driver
  }

  static CloseDriver () {
    driver.quit()
    driver = null
  };
}

module.exports = DriverHandler