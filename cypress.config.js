const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jdpoad", // Adicione o projectId aqui
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  }
});
