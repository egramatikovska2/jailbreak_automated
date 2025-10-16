/// <reference types="cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_support = require('../../../support/jb-support/01-login-support');
const edit_support = require('../../../support/jb-support/02-network-map-support');

//CREATING A PLACE BY THE ADD PLACE BUTTON
Then('I should click on EDIT NETWORK button',()=>{
    jb_support.click_btn('button[type="button"] > span','span', 'Edit Network')
    cy.wait(2000)
})

Then('I should be redirected on the edit network mode',()=>{
    cy.wait(2000)
    edit_support.validate_edit_network_map()
})

When('I click on the ADD PLACE button',()=>{
    jb_support.click_btn('button[type="button"]','span > span:nth-child(2)', 'Add Place')
})

Then('the side dialog for the adding a place should be displayed',()=>{
    cy.wait(2000)
    edit_support.check_dialog_adding_place('Place near McCall','(44.809921, -115.840943)')    
})

When('I add the information for the place',()=>{
    jb_support.populate_input('input[name="address"]','421 High Ave')
    jb_support.populate_input('input[name="city"]','Dyersburg')
    jb_support.populate_input('input[name="state"]','Tennessee')
    jb_support.populate_input('input[name="zip"]','38024')
    jb_support.populate_input('input[name="customName"]','Tennessee - Automation')
    cy.wait(2000)
})

Then('I should click on CONFIRM button',()=>{
    jb_support.click_btn('button[type="submit"]','span > span','Confirm')
})

Then('a pop up with the created place should appear on the map',()=>{
    cy.get('.mapboxgl-popup-content').should('exist').should('be.visible')
    jb_support.check_text('.mapboxgl-popup-content > div > div', 'h4', 'Tennessee - Automation')
    jb_support.check_text('.mapboxgl-popup-content > div > div', 'p', '421 High Avenue , Dyersburg, Tennessee')
    jb_support.check_btn_text('.mapboxgl-popup-content > div > div > button', 'span > span:nth-child(2)','Edit Place', 'exist')
})

Then('the new place should be displayed in Network Layers',()=>{
    edit_support.network_layers_text('[id*="tempPlace"]','Tennessee - Automation', 'have.length.at.least', 1)
})

Then('I should save the changes',()=>{
    jb_support.click_btn('button[type="button"]', 'span > span', 'Save Changes')
})

//CREATING A PLACE BY SEARCHING AN ADDRESS

When('I search an address',()=>{
    jb_support.validate_input('input[placeholder="Search Location"]','exist')
    jb_support.populate_input('input[placeholder="Search Location"]','9 Geiger Rd, Key West, Florida 33040, USA')
    cy.get('[data-expanded="true"]').should('have.attr','value','9 Geiger Rd, Key West, Florida 33040, USA')
})

Then('a suggestion for the searched address should appear',()=>{
    jb_support.validate_input('div[value="9 Geiger Road, Key West, Florida 33040, United States"] > span','exist')
})

When('I select the suggested address',()=>{
    jb_support.click_btn('div[value="9 Geiger Road, Key West, Florida 33040, United States"]','span','9 Geiger Road, Key West, Florida 33040, United States')
    cy.wait(1000)
})

Then('a pop up with the place should appear on the map',()=>{
    edit_support.check_popup('9 Geiger Road', 'Key West, Florida', 'Save Place');
})

When('I click on SAVE PLACE button',()=>{
    jb_support.click_btn('.mapboxgl-popup-content > div > div > button', 'span > span:nth-child(2)','Save Place')
})

Then('the place should be displayed in Network Layers',()=>{
    edit_support.network_layers_text('[id*="tempPlace"]','9 Geiger Road', 'have.length.at.least', 1)
})

//CREATING A PLACE BY CLICKING ON THE MAP - INVALID PLACE 

Then('I should select the tool for adding a place',()=>{
    jb_support.click_btn('button[type="button"] > div', 'p', 'Add')
})

When('I click on the map',()=>{
    cy.wait(2000)
    cy.get('.mapboxgl-map').click(800, 200)
    cy.wait(2000)
})

Then('a pop up for entering the details for the place should be displayed',()=>{
    edit_support.check_dialog_invalid_address('Place near Kamas');
})

When('I enter the details for the place',()=>{
    cy.wait(2000)
    edit_support.enter_details_invalid_address('2326 Country Rd', 'Kamas', 'Utah', '84036');
})

Then('the place should be displayed in Network Layers section',()=>{
    edit_support.network_layers_text('[id*="tempPlace"]','2326 Country Road', 'have.length.at.least', 1)
})

//CREATING A PLACE BY CLICKING ON THE MAP - VALID PLACE

When('I click on the map for adding a place',()=>{
    cy.wait(2000)
    edit_support.map_zoom('.mapboxgl-map', -3000, -3000, -3000);
    cy.wait(2000)
    cy.get('.mapboxgl-map').click(820, 600)
    cy.wait(2000)
})

Then('a pop up with the selected place should appear on the map',()=>{
    edit_support.check_popup('6 Elk Ridge Road', 'Williamsburg, New Mexico', 'Edit Place')
})

Then('the newly created place should be displayed in Network Layers',()=>{
    edit_support.network_layers_text('[id*="WILL"]','6 Elk Ridge Road', 'have.length.at.least', 1)
})

