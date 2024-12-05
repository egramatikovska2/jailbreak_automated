# E2E Automated QA Tests - Jailbreak

This repository hosts end-to-end tests built with cypress for Jailbreak.

## Get Setup

```bash
# prep environment - after copying, make sure to update the values in .env
cp .example.env .env
# prep dependencies
npm install
# run all tests
npm run cy
# run a single feature
npx cypress run --headless --spec cypress\e2e\jailbreak_automated\features\01-jb-login.feature
```

Note the `npm run cy` will fail with an exit status of 2 in case one or more
tests did not succeed. Failed tests will produce screenshots in the `cypress/screenshots/`
directory.

## Env Variables & Secrets

To add a new environment variable/secret to be used in the tests, follow these
steps:
1. Add a dummy entry in the `.example.env` - don't put the actual secret value there
2. Add the real entry into the `.env` file (this is not version controlled, so safe)
3. Add a new line in `cypress.config.js` in the `env: {...}` key, following the other entries
