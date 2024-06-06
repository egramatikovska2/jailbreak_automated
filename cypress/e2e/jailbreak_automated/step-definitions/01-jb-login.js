/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_supportFile = require('../../../support/jb-support/01-jb-login-support');
const jb_credentials = {
    jailbreak_buyer_email: Cypress.env('JAILBREAK_EMAIL_BUYER'),
    jailbreak_buyer_pass: Cypress.env('JAILBREAK_PASS_BUYER')
}


//JAILBREAK - SUCCESSFUL LOGIN - CORRECT EMAIL AND PASSWORD
When('I open the Jailbreak app',()=>{
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('JAILBREAK_WEBHOST'))
})
Then('I should be redirected on Jailbreak web',()=>{
    cy.url().should('contain', Cypress.env('JAILBREAK_WEBHOST') + 'login')
})
Then('I should assert the role choosing page',()=>{
    jb_supportFile.check_buyer_vs_supplier('Buyer');
    jb_supportFile.check_buyer_vs_supplier('Supplier (Coming Soon)');
    jb_supportFile.check_B_vs_S('B');
    jb_supportFile.check_B_vs_S('S');
})
Then('I should choose the role Buyer',()=>{
    jb_supportFile.choose_role('B')
})
Then('I should be redirected on the login page for Jailbreak',()=>{
    jb_supportFile.check_fields_with_placeholder('Enter Your Email');
    jb_supportFile.check_fields_with_placeholder('Enter Your Password');
    cy.get('button[type="button"]').should('be.disabled').find('span > span').should('contain','Login')
})
Then('I enter the correct email for Jailbreak',()=>{
    jb_supportFile.login_fields_type('Enter Your Email', jb_credentials.jailbreak_buyer_email);
})
Then('I enter the correct password for Jailbreak',()=>{
    jb_supportFile.login_fields_type('Enter Your Password', jb_credentials.jailbreak_buyer_pass);
})
Then('I click on the login button for Jailbreak',()=>{
    cy.get('button[type="button"]').should('be.enabled').find('span > span').should('contain','Login').click()
})
Then('I should be redirected on the list with available transportation lanes',()=>{
    cy.url().should('contain',Cypress.env('JAILBREAK_WEBHOST')+ 'lanes')
})
Then('I should assert the lanes page',()=>{
    jb_supportFile.assert_lanes_page();
})

//JAILBREAK - UNSUCCESSFUL LOGIN - INCORRECT EMAIL
Then('I enter the incorrect email for Jailbreak',()=>{
    jb_supportFile.login_fields_type('Enter Your Email','incorrect_email@cloudsort.com')
})
Then('there should be an error message for incorrect email or password',()=>{
    jb_supportFile.check_error_message('Incorrect email or password');
})
Then('I should be not be redirected on the list with available transportation lanes',()=>{
    cy.url().should('not.contain','lanes').should('contain','login')
})

//JAILBREAK - UNSUCCESSFUL LOGIN - INCORRECT PASSWORD
Then('I enter the incorrect password for Jailbreak',()=>{
    jb_supportFile.login_fields_type('Enter Your Password','incorrect_password');
    cy.get('input[placeholder="Enter Your Password"]').invoke('attr', 'type', 'text');
})