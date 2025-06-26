// load dotenv - if not CI, so in CI we will use the env vars specified in the
// action itself

if (process.env.CI !== 'true')
  require('dotenv').config();

const { defineConfig } = require("Cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config))
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/jailbreak_automated/features/*.feature",
    watchForFileChanges:false,
    chromeWebSecurity:false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
  },
  env: {
    DOMAIN: process.env.CYPRESS_DOMAIN,
    JAILBREAK_EMAIL_USERA: process.env.CYPRESS_JAILBREAK_EMAIL_USERA,
    JAILBREAK_PASS_USERA: process.env.CYPRESS_JAILBREAK_PASS_USERA,
    JAILBREAK_EMAIL_USERB: process.env.CYPRESS_JAILBREAK_EMAIL_USERB,
    JAILBREAK_PASS_USERB: process.env.CYPRESS_JAILBREAK_PASS_USERB,
    JAILBREAK_WEBHOST: process.env.CYPRESS_JAILBREAK_WEBHOST,
    JAILBREAK_APIHOST: process.env.CYPRESS_JAILBREAK_APIHOST,
    JAILBREAK_API_USERNAME: process.env.CYPRESS_JAILBREAK_API_USERNAME,
    JAILBREAK_API_PASS: process.env.CYPRESS_JAILBREAK_API_PASS
  }
});







