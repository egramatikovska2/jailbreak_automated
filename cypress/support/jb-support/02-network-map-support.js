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
    login_support.check_text('div[data-fluid="true"]', 'div > div > label', 'Date Range')
    login_support.check_text('button[type="button"]','span','Start - End Date')
}


module.exports = {
    login,
    validate_filters
}