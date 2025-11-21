const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
