const login_support = require('./01-login-support.js');

function login(){
    login_support.populate_input('input[placeholder="name@company.com"]', Cypress.env('JAILBREAK_EMAIL_USERB'))
    login_support.populate_input('input[placeholder="Enter Your Password"]', Cypress.env('JAILBREAK_PASS_USERB'))
    login_support.click_btn('button[type="submit"]', 'span > span', 'Log In')
}

function validate_filters(){
    login_support.check_text('div[data-fluid="true"]', 'div > div > label', 'Origin')
    login_support.validate_input('input[placeholder="City, State or Zip..."]','exist')    
    login_support.check_text('div[data-fluid="true"]', 'div > div > label', 'Destination')
    login_support.validate_input('input[placeholder="City, State or Zip..."]','exist')    
    login_support.check_text('div[data-fluid="true"]', 'div > div > label', 'Date range')
    login_support.check_text('button[type="button"]','span','Start - End Date')
}

function validate_edit_network_map(){
    login_support.check_btn_text('button[type="button"]', 'span > span', 'Leave Edit Network', 'exist')
    login_support.check_btn_text('button[type="button"]', 'span > span', 'Save Changes', 'exist')
    cy.get('button[type="button"] > span > span').contains('Save Changes').parent().parent().should('be.disabled')
    login_support.validate_input('input[placeholder="Search Location"]','exist')
    login_support.check_btn_text('button[type="button"]','div > p', 'Select', 'exist')
    login_support.check_btn_text('button[type="button"]','div > p', 'Add', 'exist')
    login_support.check_btn_text('button[type="button"]','div > p', 'Connect', 'exist')
    login_support.check_btn_text('button[type="button"]','div > p', 'Erase', 'exist')
    login_support.check_btn_text('button[type="button"]', 'span > span:nth-child(2)', 'Create Connection', 'exist')
    login_support.check_btn_text('button[type="button"]', 'span > span:nth-child(2)', 'Add Place', 'exist')
    cy.get('div > h1').contains('Network Layers').should('exist')
}

function check_dialog_adding_place(){
    cy.get('section[role="dialog"]').should('be.visible').should('exist')
    cy.get('section[role="dialog"] > header').find('h2 > div > span').should('contain','Place Details')
    login_support.check_btn_text('button[type="submit"]', 'span > span', 'Confirm','exist')
    login_support.validate_input('input[name="address"]','exist')
    login_support.validate_input('input[name="city"]','exist')
    login_support.validate_input('input[name="state"]','exist')
    login_support.validate_input('input[name="zip"]','exist')
    login_support.validate_input('input[name="customName"]','exist')
}

function check_dialog_invalid_address(){
    cy.get('.mapboxgl-popup-content').should('exist').should('be.visible')
    login_support.check_text('.mapboxgl-popup-content > div > div','h4','Place near Moore')
    login_support.check_text('.mapboxgl-popup-content > div > div','p','(43.476195, -113.625267)')
    login_support.validate_input('input[name="address"]','exist')
    login_support.validate_input('input[name="city"]','exist')
    login_support.validate_input('input[name="state"]','exist')
    login_support.validate_input('input[name="zip"]','exist')
    login_support.check_btn_text('button[type="submit"]','span > span','Confirm','exist')
}

function enter_details_invalid_address(){
    login_support.populate_input('input[name="address"]','3220 Clay Ln')
    cy.get('input[name="city"]').clear()
    cy.get('input[name="state"]').clear()
    login_support.populate_input('input[name="city"]','New Meadows')
    login_support.populate_input('input[name="state"]','Idaho')
    login_support.populate_input('input[name="zip"]','83654')
}

module.exports = {
    login,
    validate_filters,
    validate_edit_network_map,
    check_dialog_adding_place,
    check_dialog_invalid_address,
    enter_details_invalid_address
}