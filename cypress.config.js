const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: [
      "cypress/e2e/api/**/*.cy.{js,ts}", // API tests
      "**/*.feature",                    // Cucumber tests
    ],
    setupNodeEvents(on, config) { on('file:preprocessor', cucumber()); },
  },
});