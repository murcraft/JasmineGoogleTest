let webdriver = require("selenium-webdriver");

let browser = new webdriver.Builder().forBrowser("firefox").build();//.withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get("http://www.google.by");

let promise = browser.getTitle();

promise.then( title => {
    console.log(title);
});
