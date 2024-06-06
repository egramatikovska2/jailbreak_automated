const jb_credentials = {
    jailbreak_buyer_email: Cypress.env('JAILBREAK_EMAIL_BUYER'),
    jailbreak_buyer_pass: Cypress.env('JAILBREAK_PASS_BUYER')
}

function check_B_vs_S(role){
    cy.get('.mantine-Paper-root > div > div > span').contains(role).should('exist')
}

function check_buyer_vs_supplier(text){
    cy.get('.mantine-Paper-root > div > div:nth-child(2)').find('h3').contains(text).should('exist')
}

function choose_role(role){
    cy.get('.mantine-Paper-root > div > div > span').contains(role).click()
}

function check_fields_with_placeholder(text){
    if (text === 'Enter Your Email') {
        cy.get(`input[placeholder="${text}"]`).should('exist')
    }
    if (text === 'Enter Your Password') {
        cy.get(`input[placeholder="${text}"]`).should('exist')
    }

}
function login_fields_type(text,value) {
    if (text === 'Enter Your Email') {
        cy.get(`input[placeholder="${text}"]`).should('exist').type(value);
    }
    if (text === 'Enter Your Password') {
        cy.get(`input[placeholder="${text}"]`).should('exist').type(value);
    }
}

function assert_lanes_page(){
    jb_supportFile.check_fields_with_placeholder('Los Angeles, CA');
    jb_supportFile.check_fields_with_placeholder('Dallas, TX');
    cy.get('button[data-dates-input="true"]> span').contains('Select Dates').should('exist')
    jb_supportFile.check_fields_with_placeholder('3');
    cy.get('div > p').contains('Days').should('exist')
}

function check_error_message(text){
    cy.get('[role="alert"] > div:nth-child(1) > div').find('div').contains(text).should('exist').should('be.visible')
}


module.exports = {
    jb_credentials,
    check_buyer_vs_supplier,
    check_B_vs_S,
    choose_role,
    login_fields_type,
    check_fields_with_placeholder,
    assert_lanes_page,
    check_error_message
    
}