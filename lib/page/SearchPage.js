'use strict'
const {By} = require('selenium-webdriver')
const BasePage = require('./BasePage')

const searchFieldLocator = By.name('q')

class SearchPage extends BasePage {

  constructor (driver) {
    super(driver)
    this.Url = 'http://www.google.by'
  }

  async navigate () {
    await super.navigate(this.Url)
  }

  async enterRequiredWord (requestedWord) {
    await super.sendKeysInField(searchFieldLocator, requestedWord)
  }

}

module.exports = SearchPage