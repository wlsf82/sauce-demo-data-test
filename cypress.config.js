const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
  },
})
