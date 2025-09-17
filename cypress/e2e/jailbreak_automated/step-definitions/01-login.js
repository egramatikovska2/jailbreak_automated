/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_supportFile = require('../../../support/jb-support/01-login-support');


//SUCCESSFUL LOGIN - CORRECT EMAIL AND PASSWORD
When('I open the Jailbreak app',()=>{
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('JAILBREAK_WEBHOST'))
})
Then('I should be redirected on the login page for Jailbreak',()=>{
    jb_supportFile.validate_input('input[placeholder="name@company.com"]','exist');
    jb_supportFile.validate_input('input[placeholder="Enter Your Password"]','exist');
    cy.get('button[type="submit"]').should('exist').should('be.enabled').find('span > span').should('contain','Log In')
    cy.get('form > div > div').last().find('div').first().find('p').contains("Don’t have an account yet?").should('exist')
    cy.get('form > div > div').last().find('div').last().find('p').contains('Forgot your password?').should('exist')
})
Then('I should enter the correct email for User B',()=>{
    jb_supportFile.populate_input('input[placeholder="name@company.com"]', Cypress.env('JAILBREAK_EMAIL_USERB'))
})
Then('I should enter the correct password for User B',()=>{
    jb_supportFile.populate_input('input[placeholder="Enter Your Password"]', Cypress.env('JAILBREAK_PASS_USERB'))
})
When('I click on the LOGIN button',()=>{
    jb_supportFile.click_btn('button[type="submit"]', 'span > span', 'Log In')
})
Then('I should be redirected on the map with available transportation lanes',()=>{
    jb_supportFile.validate_network_map()
})

//UNSUCCESSFUL LOGIN - INCORRECT EMAIL
Then('I should enter an incorrect email for User B',()=>{
    jb_supportFile.populate_input('input[placeholder="name@company.com"]','incorrect_email@domain.com')
})
Then('there should be an error message for incorrect email or password',()=>{
    jb_supportFile.check_text('[role="alert"]','div > div > div','Incorrect email or password')
})

//UNSUCCESSFUL LOGIN - INCORRECT PASSWORD
Then('I should enter an incorrect password for User B',()=>{
    jb_supportFile.populate_input('input[placeholder="Enter Your Password"]','incorrect_password')
})