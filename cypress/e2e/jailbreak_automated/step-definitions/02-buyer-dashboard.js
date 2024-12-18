/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const dashboard_support = require('../../../support/jb-support/02-buyer-dashboard-support');
const lane_support = require('../../../support/jb-support/02-supplier-create-lane-support')
const login_support = require('../../../support/jb-support/01-jb-login-support');

//BUYER - MAP VIEW - LANE PREVIEW
When("I click on one of the lanes' origin",()=>{
    dashboard_support.map_marker('div > span','Lawrenceville, GA ','exist');
    cy.wait(2000)
    dashboard_support.map_marker_click('div > span','Lawrenceville, GA ');
    dashboard_support.map_marker('div > span','Kenai, AK ','exist')
})
Then("I should see the lane's preview with its information",()=>{
    cy.get('[data-with-border="true"]').find('div > div').contains('Supplier Org').should('exist')
    cy.get('[data-with-border="true"] > div:nth-child(2)').should('exist')
})
Then("I should assert the lane's information",()=>{
    dashboard_support.lane_preview_information();
    lane_support.check_btn_text('button[type="button"]','span > span','See lane details','exist')
})

//BUYER - OPENING THE LANE FROM MAP VIEW
When('I click on SEE LANE DETAILS button',()=>{
    lane_support.click_btn('button[type="button"]','span > span:nth-child(1)','See lane details');
})
Then("I should be redirected on the lane's details page",()=>{
    login_support.check_header('h1','Lawrenceville, GA → Kenai, AK');
})
Then("I should assert the lane's details page",()=>{
    dashboard_support.assert_lanes_details();
    lane_support.check_btn_text('button[data-dates-input="true"]','span','Start - End Date','exist');
    login_support.check_input('input[placeholder="No. of CBs"]');
    lane_support.check_btn_text('button[type="button"]','span > span > p','Search','exist');
    lane_support.check_btn_text('button[type="button"]','span > span:nth-child(2)','Calendar View','exist');
    lane_support.check_btn_text('button[type="button"]','span > span:nth-child(2)','List View','exist');   
})

//BUYER - LIST VIEW
When('I click on LIST VIEW button',()=>{
    lane_support.check_btn_text('button[type="button"]','span > span:nth-child(2)','List View', 'exist');
    lane_support.click_btn('button[type="button"]','span > span:nth-child(2)','List View');
})
Then('I should be switched to list view of the lanes',()=>{
    login_support.check_header('h1','List of Transportation lanes');
    dashboard_support.assert_lanes_list();
    lane_support.assert_td('table > thead',0, 0,'th','Lane ID','exist');
    lane_support.assert_td('table > thead',0,0,'th','Origin','exist');
    lane_support.assert_td('table > thead',0,0,'th','Destination','exist');
    lane_support.assert_td('table > thead',0,0,'th','Supplier','exist');
    lane_support.assert_td('table > thead',0,0,'th','Service days','exist');
    cy.get('tbody').first().find('tr').should('have.length.at.least',1)
})

//BUYER - OPENING LANE FROM LIST VIEW
When('I open one of the lanes',()=>{
    dashboard_support.open_lane(1,2,'Lawrenceville, GA','Kenai, AK')
})

