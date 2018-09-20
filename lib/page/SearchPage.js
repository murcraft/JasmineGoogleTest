'use strict';
const {By} = require('selenium-webdriver');
const BasePage = require("./BasePage");

const elementName = By.name("q");
const requestText = "ITechArt";

class SearchPage extends BasePage {

  constructor(driver) {
    super(driver);
    this.Url = "http://www.google.by";
  }

  async navigate(){
    await super.navigate(this.Url);
  }

  async textRequireInField() {
    await super.sendKeysInField(elementName, requestText);
  }

}

module.exports = SearchPage;