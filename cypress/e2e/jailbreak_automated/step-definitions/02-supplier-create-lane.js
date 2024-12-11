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
     create_lane_support.fill_input('input[name="address"]','exist','1523 Stellar Dr');
     create_lane_support.fill_input('input[name="city"]','exist','Kenai');
     create_lane_support.fill_input('input[name="state"]','exist','Alaska');
     create_lane_support.fill_input('input[name="zip"]','exist','99611');
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
     create_lane_support.click_btn('button[type="button"]','span > span', 'Create New Gateway')  
})
Then('I enter the details for the destination Gateway',()=>{
     create_lane_support.fill_input('input[name="address"]','exist','373 Downing St');
     create_lane_support.fill_input('input[name="city"]','exist','Lawrenceville');
     create_lane_support.fill_input('input[name="state"]','exist','Georgia');
     create_lane_support.fill_input('input[name="zip"]','exist','30045');
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
When('I click on the Date range field',()=>{
     create_lane_support.check_btn_text('button[type="button"]','span','Select dates','exist');
     create_lane_support.click_btn('button[type="button"]','span','Select dates')
})
Then('the calendar should be displayed',()=>{
     cy.get('[data-calendar="true"]').should('exist')
     cy.get('[data-calendar="true"]').find('tbody').should('exist')
})
Then('I should choose the start date',()=>{
     cy.get('[data-today="true"]').should('exist').click()
})
When('I choose the end date',()=>{
     cy.get('button[data-direction="next"]').click()
     cy.get('.mantine-DatePickerInput-monthRow').eq(2).find('td > button').eq(5).click()
})
Then('the calendar should close',()=>{
     cy.get('[data-calendar="true"]').should('not.exist')
})

//SETTING THE WEEKDAYS
Then('I should select Monday, Wednesday and Friday as service days',()=>{
     create_lane_support.click_btn('label','span','M');
     create_lane_support.click_btn('label','span','W');
     create_lane_support.click_btn('label','span','F');
     cy.get('[data-checked="true"]').should('have.length',3)
})

//SETTING THE TRIP START AND FINISH TIME
Then('I should set the trip start time',()=>{
     create_lane_support.fill_input('input[name="tripStartTime"]','exist','10:00');
})
Then('I should set the trip finish time',()=>{
     create_lane_support.fill_input('input[name="tripEndTime"]','exist','15:00');
})

//SETTING THE TRIP DROP OFF START AND END WINDOW
Then('I should set the trip drop off start window',()=>{
     create_lane_support.fill_input('input[name="dropOffStartTime"]','exist','01:00');
})
Then('I should set the trip drop off end window',()=>{
     create_lane_support.fill_input('input[name="dropOffEndTime"]','exist','00:45');
})

//SETTING THE TRIP PICK UP START AND END WINDOW
Then('I should set the trip pick up start window',()=>{
     create_lane_support.fill_input('input[name="pickUpStartTime"]','exist','01:00');
})
Then('I should set the trip pick up end window',()=>{
     create_lane_support.fill_input('input[name="pickUpEndTime"]','exist','01:00');
})

//SETTING THE CAPACITY AND PRICING
Then('I should set the CBs per day',()=>{
     create_lane_support.fill_input('input[name="cbPerDay"]','exist','10');
})
Then('I should set the price per CB',()=>{
     create_lane_support.fill_input('input[name="pricePerCB"]','exist','30');
})
Then('I should set the spot rate price',()=>{
     create_lane_support.fill_input('input[name="pricePerCPSpot"]','exist','35');
})
Then('I should set the reservation fee percentage',()=>{
     create_lane_support.fill_input('input[name="reservationFee"]','exist','10');
})
Then('I should set the free cancelation period',()=>{
     create_lane_support.fill_input('input[name="cancellationPeriod"]','exist','2');
})

//CREATING A LANE WITH ALL INFORMATION PROVIDED
Then('I should provide all the information for the lane',()=>{
     create_lane_support.click_btn('button[type="button"]','span > span', 'Create New Gateway')
     
     //origin gateway
     create_lane_support.fill_input('input[name="address"]','exist','1523 Stellar Dr');
     create_lane_support.fill_input('input[name="city"]','exist','Kenai');
     create_lane_support.fill_input('input[name="state"]','exist','Alaska');
     create_lane_support.fill_input('input[name="zip"]','exist','99611');
     create_lane_support.check_btn_text('button[type="button"]','span > span', 'Cancel','exist');
     create_lane_support.check_btn_text('button[type="submit"]','span > span','Save','exist');
     cy.get('button[type="submit"] > span > span').first().click()
     cy.get('[role="alert"]').should('have.length', 1)
     cy.get('label').contains('Gateway 1 (Origin)').should('exist')
     cy.get('input[value="1523 Stellar Dr Kenai"]').should('exist')
     create_lane_support.click_btn('button[type="button"]','span > span', 'Create New Gateway')
     
     //destination gateway
     create_lane_support.fill_input('input[name="address"]','exist','373 Downing St');
     create_lane_support.fill_input('input[name="city"]','exist','Lawrenceville');
     create_lane_support.fill_input('input[name="state"]','exist','Georgia');
     create_lane_support.fill_input('input[name="zip"]','exist','30045');
     cy.get('button[type="submit"] > span > span').first().click()
     cy.get('[role="alert"]').should('have.length', 1)
     cy.get('label').contains('Gateway 2 (Destination)').should('exist')
     cy.get('input[value="373 Downing St Lawrenceville"]').should('exist')
     create_lane_support.check_btn_text('button[type="button"]','span > span', 'Create New Gateway','not.exist')

     //date range
     create_lane_support.check_btn_text('button[type="button"]','span','Select dates','exist');
     create_lane_support.click_btn('button[type="button"]','span','Select dates')
     cy.get('[data-today="true"]').should('exist').click()
     cy.get('button[data-direction="next"]').click()
     cy.get('.mantine-DatePickerInput-monthRow').eq(2).find('td > button').eq(5).click()
     cy.get('[data-calendar="true"]').should('not.exist')

     //service days
     create_lane_support.click_btn('label','span','M');
     create_lane_support.click_btn('label','span','W');
     create_lane_support.click_btn('label','span','F');
     cy.get('[data-checked="true"]').should('have.length',3)

     //trip start and end date
     create_lane_support.fill_input('input[name="tripStartTime"]','exist','10:00');
     create_lane_support.fill_input('input[name="tripEndTime"]','exist','15:00');

     //drop off window
     create_lane_support.fill_input('input[name="dropOffStartTime"]','exist','01:00');
     create_lane_support.fill_input('input[name="dropOffEndTime"]','exist','00:45');

     //pick up window
     create_lane_support.fill_input('input[name="pickUpStartTime"]','exist','01:00');
     create_lane_support.fill_input('input[name="pickUpEndTime"]','exist','01:00');

     //capacity and pricing
     create_lane_support.fill_input('input[name="cbPerDay"]','exist','10');
     create_lane_support.fill_input('input[name="pricePerCB"]','exist','30');
     create_lane_support.fill_input('input[name="pricePerCPSpot"]','exist','35');
     create_lane_support.fill_input('input[name="reservationFee"]','exist','10');
     create_lane_support.fill_input('input[name="cancellationPeriod"]','exist','2');

})
When('I save the lane',()=>{
    create_lane_support.click_btn('button[type="submit"]','span > span', 'Submit') 
})
Then('I should close the side window',()=>{
     cy.get('body').should('have.attr','data-scroll-locked','1')
     jb_supportFile.check_header('h2','Your new lane has been successfully created.');
     cy.get('header > button').should('exist').click()


})
