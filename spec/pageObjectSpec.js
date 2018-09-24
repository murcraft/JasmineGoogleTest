'use strict'
let SearchPage = require('../lib/page/searchPage')
let ResultsPage = require('../lib/page/resultsPage')
// let DriverHandler = require('../lib/driver/driverHandler')
let using = require('jasmine-data-provider')
let dataTest = require('../lib/test/testData.json')
let datatitle = 'google'
let datarequest = 'itechart'

let searchPage
let resultsPage
let driver

describe('Test searching on Google', function () {
  beforeAll(async function () {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
    // driver = await DriverHandler.GetInstance()
    searchPage = new SearchPage()
  })

/*  afterAll(async function () {
    await DriverHandler.CloseDriver()
  })*/

  using(dataTest, function (data) {

    it('Open main page and verify title', async function () {
      await searchPage.navigate()
      console.log('navigate')
      let titleOfSearchingPage = await searchPage.getPageTitle()
      await console.log(titleOfSearchingPage, 'Title')
      await expect(titleOfSearchingPage.toLowerCase()).toEqual(datatitle, 'Title of searching page')
    })

    it('Search for keyword and verify title of results page', async function () {
      await searchPage.enterRequiredWord(datarequest)
      resultsPage = new ResultsPage()
      let titleOfResultsPage = await resultsPage.getPageTitle(datarequest)//getResultsTitle(data.request)
      await console.log(titleOfResultsPage)
      await expect(titleOfResultsPage.toLowerCase()).toContain(datarequest, 'Title of results page')
    })
  /*
      it('Check the page headers for matching the requested word',
        async function () {
          let titles = await resultsPage.getResulsHeaders()
          titles.forEach(async value => {
            await expect(value.toLowerCase()).toMatch(data.request, 'The requested word')
          })
        })

      it('Search for total results and check that this number is more than min',
        async function () {
          let totalResults = await resultsPage.getNumberOfResults()
          await expect(totalResults).toBeGreaterThan(Number.parseInt(data.count), 'Min number of results')
        })*/

  })

})
