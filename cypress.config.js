const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jdpoad", 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});