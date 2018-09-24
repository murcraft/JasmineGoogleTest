exports.config = {
  directConnect: true,

  specs: ['*ObjectSpec.js'],
  framework: 'jasmine',

/*  onPrepare: () => {
    browser.manage().window().setSize(1024, 800);
  },*/

/*
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
*/

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
/*    chromeOptions: {
      args: [
        '--disable-infobars',
        '--disable-extensions',
        'verbose',
        'log-path=/tmp/chromedriver.log'
      ],
      prefs: {
        'profile.password_manager_enabled': false,
        'credentials_enable_service': false,
        'password_manager_enabled': false
      }
    }*/
  },

  jasmineNodeOpts: {
    showColors: true,
    displaySpecDuration: true,
    print: () => {},
    defaultTimeoutInterval: 25000
  }
};