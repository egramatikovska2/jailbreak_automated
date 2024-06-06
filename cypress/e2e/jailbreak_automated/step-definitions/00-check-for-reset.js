/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_reset = require('../../../support/jb-support/00-check-for-reset-support');
const jb_credentials = {
    jailbreak_buyer_email: Cypress.env('JAILBREAK_EMAIL_BUYER'),
    jailbreak_buyer_pass: Cypress.env('JAILBREAK_PASS_BUYER')
};

Then('I should reset the system if all the transportation lanes are bought',()=>{
   jb_reset.reset_JB();
   cy.get('tbody').should('exist')
})