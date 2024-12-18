/// <reference types="Cypress"/>
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const dashboard_support = require('../../../support/jb-support/02-buyer-dashboard-support');
const lane_support = require('../../../support/jb-support/02-supplier-create-lane-support');
const filter_support = require('../../../support/jb-support/03-buyer-dashboard-filters-support');

//MAP VIEW - FILTER LANES BY EXISTING ORIGIN(CITY))
Then("I should type LAWRENCEVILLE as an origin city in the lanes' filters",()=>{
    lane_support.fill_input('input[placeholder="City, State or Zip..."]',0,'exist','Lawrenceville');
})
When('I click on SEARCH button',()=>{
    lane_support.click_btn('button[type="button"]','span > span > p','Search');
})
Then('results should be displayed regarding the search',()=>{
    filter_support.search_results_origin();
})

//MAP VIEW - FILTER LANES BY NON-EXISTING ORIGIN(CITY)
Then("I should type SKOPJE as an origin city in the lanes' filters",()=>{
    lane_support.fill_input('input[placeholder="City, State or Zip..."]',0,'exist','Skopje');
})
Then('no results should be displayed regarding the search',()=>{
    cy.wait(2000)
    cy.get('[aria-label="Map marker"]').should('not.exist')
})

/* ---------ONGOING BUG----------
//MAP VIEW - FILTER LANES BY EXISTING DESINATION(CITY)
Then("I should type KENAI as a destination city in the lanes' filters",()=>{
    lane_support.fill_input('input[placeholder="City, State or Zip..."]',1,'exist','Kenai');   
})

Scenario: Map View - Filter lanes by existing Destination(City)
    Given I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    Then I should type KENAI as a destination city in the lanes' filters
    When I click on SEARCH button
    Then results should be displayed regarding the search
*/

//MAP VIEW - FILTER LANES BY NON-EXISTING DESTINATION(CITY)
Then("I should type SKOPJE as a destination city in the lanes' filters",()=>{
    lane_support.fill_input('input[placeholder="City, State or Zip..."]',1,'exist','Skopje');
})

//MAP VIEW - FILTER LANES BY EXISTING DATE RANGE
Then('I should choose a date range',()=>{
    filter_support.date_range_all()
})








/*



Scenario: Filter lanes by existing Date range
Scenario: Filter lanes by non-existing Date range

Scenario: Filter lanes by existing number of CBs per week
Scenario: Filter lanes by non-existing number of CBs per week
*/