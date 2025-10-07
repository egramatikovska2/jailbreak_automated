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