/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const jb_login = require('../../../support/jb-support/01-login-support');
const jb_supportFile = require('../../../support/jb-support/02-network-map-support');

//VALIDATING THE FILTERS
Then('I should log in with User B',()=>{
    jb_supportFile.login();
})
Then('I should validate the filters on the Network Map',()=>{
    jb_supportFile.validate_filters();
    jb_login.check_btn_text('button[type="button"]','span > span:nth-child(2)','Search')
})

/*
//VALIDATING THE SIDEBAR
Then('I should validate the sidebar on the left side of the map',()=>{

})
*/