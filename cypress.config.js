const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) { on('file:preprocessor', cucumber()); },
  },
});