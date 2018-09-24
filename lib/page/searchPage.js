'use strict'
const {By} = require('selenium-webdriver')
const BasePage = require('./basePage')

// const searchFieldLocator = By.name('q')

class SearchPage extends BasePage {

  constructor () {
    super()
    this.Url = 'http://www.google.by'
    this.searchFieldLocator = element(by.name('q'))
  }

  async navigate () {
    await super.navigate(this.Url)
  }

  async enterRequiredWord (requestedWord) {
    // await super.isInDom(this.searchFieldLocator)//super.sendKeysInField(searchFieldLocator, requestedWord)
    // await super.sendKeysInField(this.searchFieldLocator, requestedWord)
    await super.sendKeysInField(this.searchFieldLocator, requestedWord)
  }

}

module.exports = SearchPage