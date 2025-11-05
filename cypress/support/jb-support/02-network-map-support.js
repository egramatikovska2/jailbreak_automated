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

function check_dialog_invalid_address(header){
    cy.get('.mapboxgl-popup-content').should('exist').should('be.visible')
    login_support.check_text('.mapboxgl-popup-content > div > div','h4', header)
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

function choose_origin(){
    cy.get('input[placeholder="Choose place"]').click()
    cy.get('[role="listbox"] > div > div > div > div > div[style="min-width: 100%; display: table;"]').eq(2).find('[role="option"]').then($places =>{
        const count = $places.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($places).eq(randomIndex).click();
    })  
}

function choose_destination(){
    cy.get('input[placeholder="Choose a Place"]').click()
    cy.get('[role="listbox"] > div > div > div > div > div[style="min-width: 100%; display: table;"]').last().find('[role="option"]').then($places =>{
        const count = $places.length;
        const randomIndex = Math.floor(Math.random() * count);
        cy.wrap($places).eq(randomIndex).click();
    })
}

function check_dialog_creating_lane(){
    login_support.check_text('[role="dialog"]', 'header > h2 > p', 'Lane Details')
    cy.get('[role="dialog"] > div:nth-child(2) > div > form > div').first().find('div > h5').should('contain', 'Gateways').should('have.length', 1)
    cy.get('[role="dialog"] > div:nth-child(2) > div > form > div').eq(1).find('div > h5').should('contain', 'Lane Details').should('have.length', 1)
    cy.get('p').contains('Transit Timetable').should('exist').should('have.length', 1)
    cy.get('[role="dialog"] > div:nth-child(2) > div > form > div').last().find('button[type="button"] > span > span').should('contain', 'Cancel').should('have.length', 1)
    cy.get('[role="dialog"] > div:nth-child(2) > div > form > div').last().find('button[type="submit"] > span > span').should('contain', 'Submit').should('have.length', 1)
    cy.get('p').contains('The Transit Timetable will be displayed after all required details are entered').should('exist')
}

function set_date_range(){
    login_support.click_btn('button[data-dates-input="true"]', 'span', 'Select dates')
    //start date - today
    cy.get('button[data-today="true"]').click()
    //end date - next month, 3rd week, 4th day
    cy.get('button[data-direction="next"]').click()
    cy.get('.mantine-DatePickerInput-monthRow').eq(2).find('td').eq(3).click()
}

function set_dispatch_days(day){
    login_support.click_btn('label', 'span', day)
}

function set_times(selector, time){
    login_support.populate_input(selector, time)
}

function set_lane_details(startTime, duration, dropOffStart, dropOffEnd, pickUpStart, pickUpEnd){
    cy.get('button[data-dates-input="true"]').parent().parent().find('label').contains('Date range').should('exist').should('have.length', 1)
    set_date_range();
    set_dispatch_days('Mo');
    set_dispatch_days('Tu');
    set_dispatch_days('We');
    set_dispatch_days('Th');
    set_dispatch_days('Fr');
    set_dispatch_days('Sa');
    cy.get('label').contains('Trip Start Time').should('exist').should('have.length', 1)
    set_times('input[name="tripStartTime"]', startTime);
    set_times('input[name="duration"]', duration);
    set_times('input[name="dropOffStartTime"]', dropOffStart)
    set_times('input[name="dropOffEndTime"]', dropOffEnd)
    set_times('input[name="pickUpStartTime"]', pickUpStart)
    set_times('input[name="pickUpEndTime"]',pickUpEnd) 
    cy.get('h5').contains('Lane Summary').should('exist').should('have.length', 1)
}

function validate_lane_detail_card(){
    login_support.check_text('div', 'p', 'Lane')
    login_support.check_btn_text('button[type="button"]', 'span > span', 'Edit Lane', 'exist')
    login_support.check_text('div', 'p', 'Allocations for')
    login_support.check_text('div', 'p', 'Prior')
    login_support.check_text('div > div:nth-child(2)', 'p', 'New')
    login_support.check_text('div > div:nth-child(3)', 'p', 'Total')
    login_support.check_btn_text('button[type="button"]', 'span > span', 'Publish Capacity for Sale', 'exist')
    login_support.check_text('div', 'p', 'Timetable')
}

function trip_details(){
    login_support.check_text('div', 'p', 'Trip Details')
    login_support.check_text('div > div', 'p', 'Status')
    login_support.check_text('div > div', 'p', 'Dispatch Days')
    login_support.check_text('div > div', 'p', 'Entry time')
    login_support.check_text('div > div', 'p', 'Pull time')
    login_support.check_text('div > div', 'p', 'Start Date')
    login_support.check_text('div > div', 'p', 'Finish Date')
    login_support.check_text('div > div', 'p', 'Total Capacity')
    login_support.check_text('div > div', 'p', 'Trips')
}


function validate_lane_details_page(){
    trip_details(); 
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
    check_dialog_creating_connection,
    choose_origin,
    choose_destination,
    check_dialog_creating_lane,
    set_date_range,
    set_dispatch_days,
    set_times,
    set_lane_details,
    validate_lane_detail_card,
    trip_details,
    validate_lane_details_page
}