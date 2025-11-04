/// <reference types="cypress"/>
const address_helpers = require('../../../support/jb-support/00-adding-places-support');
import {Then} from '@badeball/cypress-cucumber-preprocessor';

Then('I should add a few places on the map', () => {
    const addresses = address_helpers.address_generator_n(10); // 5 random addresses

    addresses.forEach(address => {
        cy.get('input[placeholder="Search Location"]').clear().type(address);
        cy.get('[role="option"]').first().click();
        cy.wait(3000);
        cy.get('button[type="button"]').find('span > span:nth-child(2)').contains('Save Place').click();
        cy.wait(2000);
    });
});
