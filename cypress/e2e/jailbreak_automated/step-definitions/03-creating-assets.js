/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const login_support = require('../../../support/jb-support/01-login-support');
const edit_support = require('../../../support/jb-support/02-network-map-support');

//CREATING STOPS - ADD PLACE BUTTON
Then('I should click on EDIT NETWORK button',()=>{
    login_support.click_btn('button[type="button"] > span','span', 'Edit Network')
})

Then('I should be redirected on the edit network mode',()=>{
    edit_support.validate_edit_network_map()
})

When('I click on the ADD PLACE button',()=>{
    login_support.click_btn('button[type="button"]','span > span:nth-child(2)', 'Add Place')
})

Then('the side dialog for the adding a place should be displayed',()=>{
    edit_support.check_dialog_adding_place()    
})

When('I add the information for the place',()=>{
    login_support.populate_input('input[name="address"]','421 High Ave')
    login_support.populate_input('input[name="city"]','Dyersburg')
    login_support.populate_input('input[name="state"]','Tennessee')
    login_support.populate_input('input[name="zip"]','38024')
    login_support.populate_input('input[name="customName"]','Tennessee - Automation')
})

Then('I should click on CONFIRM button',()=>{
    login_support.click_btn('button[type="submit"]','span > span','Confirm')
})

