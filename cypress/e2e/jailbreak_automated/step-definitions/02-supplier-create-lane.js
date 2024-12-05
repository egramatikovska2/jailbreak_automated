/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_supportFile = require('../../../support/jb-support/01-jb-login-support');
const create_lane_support = require('../../../support/jb-support/02-supplier-create-lane-support');


//CREATING ORIGIN AND DESTINATION GATEWAYS
When('I click on the button for creating a new lane',()=>{
     create_lane_support.click_btn('button[type="button"]','span > span:nth-child(2)', 'Create New Lane')    
})
Then('a side window for creating a lane should be displayed',()=>{
     cy.get('body').should('have.attr','data-scroll-locked','1')
     jb_supportFile.check_header('h3','Create New Lane');
     jb_supportFile.check_header('h4', 'Lane Gateways');
     jb_supportFile.check_header('h4', 'Add Gateways');
     jb_supportFile.check_header('h4', 'Lane Details');
     cy.get('button[type="button"]').eq(1).should('exist')
     jb_supportFile.check_error_message('div > div > div > span','You have no gateways added yet','exist');
     jb_supportFile.check_error_message('div > div > div > p','Automatically calculated based on the selected weekdays and date range.','exist');
     create_lane_support.check_btn_text('button[type="button"]','span > span:nth-child(2)', 'Create New Gateway','exist')
})
When('I click on the button for creating a new Gateway',()=>{
     create_lane_support.click_btn('button[type="button"]','span > span', 'Create New Gateway')
})
Then('a form for creating new Gateway should open',()=>{
     jb_supportFile.check_header('h5','Create New Gateway');
     jb_supportFile.check_input('input[name="address"]');
     jb_supportFile.check_input('input[name="city"]');
     jb_supportFile.check_input('input[name="state"]');
     jb_supportFile.check_input('input[name="zip"]');
})
When('I enter the details for the origin Gateway',()=>{
     jb_supportFile.fill_input('input[name="address"]','1523 Stellar Dr');
     jb_supportFile.fill_input('input[name="city"]','Kenai');
     jb_supportFile.fill_input('input[name="state"]','Alaska');
     jb_supportFile.fill_input('input[name="zip"]','99611');
     create_lane_support.check_btn_text('button[type="button"]','span > span', 'Cancel','exist');
     create_lane_support.check_btn_text('button[type="submit"]','span > span','Save','exist');
})
Then('I should save the origin Gateway',()=>{
     cy.get('button[type="submit"] > span > span').first().click()
})
Then('I should assert that the origin Gateway has been created',()=>{
     cy.get('[role="alert"]').should('have.length', 1)
     cy.get('label').contains('Gateway 1 (Origin)').should('exist')
     cy.get('input[value="1523 Stellar Dr Kenai"]').should('exist')
})
Then('I should click on the button for creating a new Gateway',()=>{
     create_lane_support.click_btn('button[type="button"]','span > span', 'Create New Gateway',)  
})
Then('I enter the details for the destination Gateway',()=>{
     jb_supportFile.fill_input('input[name="address"]','373 Downing St');
     jb_supportFile.fill_input('input[name="city"]','Lawrenceville');
     jb_supportFile.fill_input('input[name="state"]','Georgia');
     jb_supportFile.fill_input('input[name="zip"]','30045');
})
When('I save the destination Gateway',()=>{
     cy.get('button[type="submit"] > span > span').first().click()
})
Then('I should assert that the destination Gateway has been created',()=>{
     cy.get('[role="alert"]').should('have.length', 1)
     cy.get('label').contains('Gateway 2 (Destination)').should('exist')
     cy.get('input[value="373 Downing St Lawrenceville"]').should('exist')
     create_lane_support.check_btn_text('button[type="button"]','span > span', 'Create New Gateway','not.exist')
})

//SETTING THE LANE DETAILS - DATE RANGE
When('I click on the Date range',()=>{
     create_lane_support.check_btn_text('button[type="button"]','span','Select dates','exist');
     create_lane_support.click_btn('button[type="button"]','span','Select dates')
})
Then('the calendar should be displayed',()=>{
     cy.get('[data-calendar="true"]').should('exist')
     cy.get('[data-calendar="true"]').find('tbody').should('exist')
})