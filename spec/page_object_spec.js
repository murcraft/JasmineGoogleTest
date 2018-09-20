'use strict'
let SearchPage = require('../lib/page/SearchPage')
let ResultsPage = require('../lib/page/ResultsPage')
let DriverHandler = require('../lib/driver/DriverHandler')
const fs = require('mz/fs')

let dataTest
let searchPage
let resultsPage
let driver
const expectedTitleMainPage = 'google'
const requestedWord = 'itechart'
const pathTestData = './spec/testData.json'

describe('Test searching on Google', function () {
  async function myReadfile () {
    try {
      let test = await fs.readFile(pathTestData, 'utf8')
      return JSON.parse(test)
    }
    catch (err) { console.error(err) }
  }

  beforeAll(async function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
    driver = DriverHandler.GetInstance()
    searchPage = new SearchPage(driver)
    dataTest = await myReadfile()

  })

  afterAll(async function () {
    await DriverHandler.CloseDriver()
  })

  it('Open main page and verify title', async function () {
    await console.log(dataTest['1']['request'])
    await searchPage.navigate()
    let titleOfSearchingPage = await searchPage.getPageTitle()
    await expect(titleOfSearchingPage.toLowerCase()).
      toEqual(expectedTitleMainPage, 'Title of searching page')
  })

  it('Search for keyword and verify title of results page', async function () {
    await searchPage.enterRequiredWord(dataTest['1']['request'])
    resultsPage = new ResultsPage(driver)
    let titleOfResultsPage = await resultsPage.getPageTitle()
    await expect(titleOfResultsPage.toLowerCase()).
      toContain(requestedWord, 'Title of results page')
  })

  it('Check the page headers for matching the requested word',
    async function () {
      let titles = await resultsPage.getResulsHeaders()
      titles.forEach(async value => {
        await expect(value.toLowerCase()).
          toMatch(requestedWord, 'The requested word')
      })

    })

  it('Search for total results and check that this number is more than min',
    async function () {
      let totalResults = await resultsPage.getNumberOfResults()
      await expect(totalResults).toBeGreaterThan(10000, 'Min number of results')
    })

})