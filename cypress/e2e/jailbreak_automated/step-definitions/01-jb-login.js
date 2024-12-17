/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_supportFile = require('../../../support/jb-support/01-jb-login-support');
const create_lane_support = require('../../../support/jb-support/02-supplier-create-lane-support');
const jb_credentials = {
    jailbreak_buyer_email: Cypress.env('JAILBREAK_EMAIL_BUYER'),
    jailbreak_buyer_pass: Cypress.env('JAILBREAK_PASS_BUYER'),
    jailbreak_supplier_email: Cypress.env('JAILBREAK_EMAIL_SUPPLIER'),
    jailbreak_supplier_pass: Cypress.env('JAILBREAK_PASS_SUPPLIER')
}

//JAILBREAK BUYER - SUCCESSFUL LOGIN - CORRECT EMAIL AND PASSWORD
When('I open the Jailbreak app',()=>{
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('JAILBREAK_WEBHOST'))
})
Then('I should be redirected on the login page for Jailbreak',()=>{
    jb_supportFile.check_input('input[placeholder="name@company.com"]');
    jb_supportFile.check_input('input[placeholder="Enter Your Password"]');
    cy.get('button[type="submit"]').should('exist').should('be.enabled').find('span > span').should('contain','Log In')
})
Then('I enter the correct BUYER email for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]','exist', jb_credentials.jailbreak_buyer_email);
})
Then('I enter the correct BUYER password for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="Enter Your Password"]','exist', jb_credentials.jailbreak_buyer_pass);
})
When('I click on the login button for Jailbreak',()=>{
    cy.get('button[type="submit"]').find('span > span').should('contain','Log In').click()
})
Then('I should be redirected on the list with available transportation lanes',()=>{
    cy.url().should('contain',Cypress.env('JAILBREAK_WEBHOST')+ 'lanes')
})
Then('I should be redirected on the map with available transportation lanes',()=>{
    jb_supportFile.check_input('[placeholder="City, State or Zip..."]');
    create_lane_support.check_btn_text('button[data-dates-input="true"]','span','Start - End Date','exist');
    jb_supportFile.check_input('[placeholder="No. of CBs"]');
    create_lane_support.check_btn_text('button[type="button"]','span > span > p','Search','exist')
})


//JAILBREAK BUYER - UNSUCCESSFUL LOGIN - INCORRECT EMAIL
Then('I enter the incorrect BUYER email for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]','exist','incorrect_email@cloudsort.com')
})
Then('there should be an error message for incorrect email or password',()=>{
    jb_supportFile.check_error_message('div > div > div','Incorrect email or password','exist');
})
Then('I should not be redirected on the map with available transportation lanes',()=>{
    cy.url().should('not.contain','lanes').should('contain','login')
})


//JAILBREAK BUYER - UNSUCCESSFUL LOGIN - INCORRECT PASSWORD
Then('I enter the incorrect BUYER password for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="Enter Your Password"]','exist','incorrect_password');
    cy.get('input[placeholder="Enter Your Password"]').invoke('attr', 'type', 'text');
    cy.url().should('not.contain','lanes').should('contain','login')
})


//JAILBREAK SUPPLIER - SUCCESSFUL LOGIN - CORRECT EMAIL AND PASSWORD
Then('I enter the correct SUPPLIER email for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]', 'exist',jb_credentials.jailbreak_supplier_email);
})
Then('I enter the correct SUPPLIER password for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="Enter Your Password"]', 'exist',jb_credentials.jailbreak_supplier_pass);
})
Then('I should be redirected on the list with my transportation lanes',()=>{
    cy.url().should('contain',Cypress.env('JAILBREAK_WEBHOST')+ 'supplier/lanes')
    jb_supportFile.check_header('h1','Lanes');
    cy.get('button[type="button"]').find('span > span:nth-child(2)').contains('Create New Lane').should('exist')
    jb_supportFile.check_stats(0,'div > div', 0, 'p', 'Total Lanes');
    jb_supportFile.check_stats(0,'div > div', 1, 'p', 'Total Capacity');
    jb_supportFile.check_stats(0,'div > div', 2, 'p', 'Available Capacity');
    jb_supportFile.check_stats(0,'div > div', 3, 'p', 'Reserved Capacity');
})

//JAILBREAK SUPPLIER - UNSUCCESSFUL LOGIN - INCORRECT EMAIL
Then('I enter the incorrect SUPPLIER email for Jailbreak',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]','exist','incorrect_email@cloudsort.com')
})
Then('I should not be redirected on the list with my transportation lanes',()=>{
    cy.url().should('not.contain','supplier/lanes').should('contain','login')
})

//JAILBREAK SUPPLIER - UNSUCCESSFULL LOGIN - INCORRECT PASSWORD
Then('I enter the incorrect SUPPLIER password for Jailbreak',()=>{
    create_lane_support.fill_input('Enter Your Password','exist','incorrect_password');
    cy.get('input[placeholder="Enter Your Password"]').invoke('attr', 'type', 'text');
    cy.url().should('not.contain','supplier/lanes').should('contain','login')
})

//LOG IN AS BUYER
Then('I should log in as Buyer',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]','exist', jb_credentials.jailbreak_buyer_email);
    create_lane_support.fill_input('input[placeholder="Enter Your Password"]','exist', jb_credentials.jailbreak_buyer_pass);
    cy.get('button[type="submit"]').find('span > span').should('contain','Log In').click()
    cy.url().should('contain',Cypress.env('JAILBREAK_WEBHOST')+ 'lanes')
})

//LOG IN AS SUPPLIER
Then('I should log in as Supplier',()=>{
    create_lane_support.fill_input('input[placeholder="name@company.com"]','exist', jb_credentials.jailbreak_supplier_email);
    create_lane_support.fill_input('input[placeholder="Enter Your Password"]','exist', jb_credentials.jailbreak_supplier_pass);
    cy.get('button[type="submit"]').find('span > span').should('contain','Log In').click()
    cy.url().should('contain',Cypress.env('JAILBREAK_WEBHOST')+ 'supplier/lanes')
})