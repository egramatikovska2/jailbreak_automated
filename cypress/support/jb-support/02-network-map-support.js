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

function check_popup(address, place, button){
    cy.wait(2000)
    cy.get('.mapboxgl-popup-content').should('exist').should('be.visible')
    
    cy.get('.mapboxgl-popup-content > div > div').then($div =>{
        if($div.find(button).length > 0){
            login_support.check_text('.mapboxgl-popup-content > div > div', 'h4', address)
            login_support.check_text('.mapboxgl-popup-content > div > div', 'p', place)
            login_support.check_btn_text('.mapboxgl-popup-content > div > div > button', 'span > span:nth-child(2)', button, 'exist')
        }
        else {
            login_support.check_text('.mapboxgl-popup-content > div > div', 'h4', address)
            login_support.check_text('.mapboxgl-popup-content > div > div', 'p', place)
        }
    })
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

function check_dialog_invalid_address(header, coordinates){
    cy.get('.mapboxgl-popup-content').should('exist').should('be.visible')
    login_support.check_text('.mapboxgl-popup-content > div > div','h4', header)
    login_support.check_text('.mapboxgl-popup-content > div > div','p', coordinates)
    login_support.validate_input('input[name="address"]','exist')
    login_support.validate_input('input[name="city"]','exist')
    login_support.validate_input('input[name="state"]','exist')
    login_support.validate_input('input[name="zip"]','exist')
    login_support.check_btn_text('button[type="submit"]','span > span','Confirm','exist')
}

function enter_details_invalid_address(address, city, state, zip){
    login_support.populate_input('input[name="address"]', address)
    cy.get('input[name="city"]').clear()
    cy.get('input[name="state"]').clear()
    login_support.populate_input('input[name="city"]', city)
    login_support.populate_input('input[name="state"]', state)
    login_support.populate_input('input[name="zip"]', zip)
}

function map_zoom(element, x, y, z){
    cy.get(element).trigger('wheel', { deltaY: x}) .trigger('wheel', { deltaY: y }).trigger('wheel', { deltaY: z })
}

function map_click(element, x, y){
    cy.get(element).click(x, y)
}

function network_layers_text(selector, text, validation, length) {
    cy.get(selector).find('div > p').contains(text).should('exist').should(validation, length)
}

function check_dialog_creating_connection(){
    cy.get('section[role="dialog"]').should('exist').should('be.visible')
    login_support.check_text('[role="dialog"] > header > h2', 'div > span', 'Create Connection')
    cy.get('[role="dialog"] > div > div > div > div > div').find('input').should('have.attr','value','Lane')
    cy.get('[role="dialog"]').find('label[id*="mantine"]').contains('Origin Place').should('exist')
    cy.get('[role="dialog"]').find('label[id*="mantine"]').contains('Destination Place').should('exist')
    cy.get('[role="dialog"]').find('input[placeholder="Choose place"]').should('exist').should('have.length', 1)
    cy.get('[role="dialog"]').find('input[placeholder="Choose a Place"]').should('exist').should('have.length', 1)
    login_support.check_btn_text('[role="dialog"]','button[type="button"] > span > span','Create Connection', 'exist')

}

module.exports = {
    login,
    validate_filters,
    validate_edit_network_map,
    check_popup,
    check_dialog_adding_place,
    check_dialog_invalid_address,
    enter_details_invalid_address,
    map_zoom,
    map_click,
    network_layers_text,
    check_dialog_creating_connection
}