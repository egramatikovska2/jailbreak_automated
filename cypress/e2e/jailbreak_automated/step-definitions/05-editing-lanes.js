/// <reference types="cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_support = require('../../../support/jb-support/01-login-support');
const edit_support = require('../../../support/jb-support/02-network-map-support');


//EDITING A LANE VIA NETWORK MAP
When('I click on one of the lanes in MY LANES tab',()=>{
    cy.wait(2000)
    cy.get('div > div[data-scrollbars="xy"]').first().find('div > div').find('button').first().click()
})

Then('the detail card for the lane should be opened',()=>{
    edit_support.validate_lane_detail_card();
})

When('I click on EDIT LANE button on the lane detail card',()=>{
    jb_support.click_btn('button[type="button"]','span > span','Edit Lane')
})

Then('I should be redirected on the lane details page',()=>{
    cy.wait(2000)
    cy.url().should('contain', Cypress.env('JAILBREAK_WEBHOST') + 'supplier/lanes/')
    edit_support.validate_lane_details_page();
})