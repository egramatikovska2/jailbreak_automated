/// <reference types="cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_support = require('../../../support/jb-support/01-login-support');
const edit_support = require('../../../support/jb-support/02-network-map-support');

//CREATING A DIRECT LANE BY CREATE CONNECTION BUTTON
When('I click on the CREATE CONNECTION button',()=>{
    jb_support.click_btn('button[type="button"]', 'span > span:nth-child(2)', 'Create Connection')
})

Then('the side dialog for creating a connection should be displayed',()=>{
    edit_support.check_dialog_creating_connection();
})

Then('I should choose the origin place',()=>{
    edit_support.choose_origin();
})

Then('I should choose the destination place',()=>{
    edit_support.choose_destination();
})

When('I click on the CREATE CONNECTION button on the dialog',()=>{
    jb_support.click_btn('[role="dialog"]','div > button[type="button"] > span > span','Create Connection')
})

Then('the side dialog for entering lane details should be opened',()=>{
    edit_support.check_dialog_creating_lane();
})

Then('I should enter the lane details',()=>{
    edit_support.set_lane_details('09:00', '5', '08:20', '08:50', '20:20', '20:50');
})

When('I click on SUBMIT button on the side dialog',()=>{
    jb_support.click_btn('button[type="submit"]', 'span > span', 'Submit')
})

Then('the temporary lane should be displayed in the network layers',()=>{
    edit_support.network_layers_text('[id*="tempLane"]','tempLane', 'have.length', 1)
})

