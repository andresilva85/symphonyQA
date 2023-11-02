const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jdpoad", // Adicione o projectId aqui
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});