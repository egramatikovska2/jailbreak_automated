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
    jb_login.check_btn_text('button[type="button"]','span > span:nth-child(2) > p','Search','exist')
})


//VALIDATING THE SIDEBAR
Then('I should validate the sidebar on the left side of the map',()=>{
    cy.get('[value="MY_LANES"]').parent().find('label').should('have.attr','data-active','true')
    cy.get('[value="MY_LANES"]').parent().find('label > span').should('contain', 'My Lanes')
    cy.get('[value="EXCHANGE"]').parent().find('label').should('not.have.attr','data-active','true')
    cy.get('[value="EXCHANGE"]').parent().find('label > span').should('contain', 'Exchange')
    cy.get('[role="radiogroup"]').parent().find('div:nth-child(2) > div > div').find('button[type="button"]').should('have.length.at.least', 2)    
})

//VALIDATE THE MAP
Then('I should validate the map',()=>{
    cy.get('.mapboxgl-map').should('exist')
    jb_login.check_text('button[type="button"] > span','span', 'Edit Network')
})
