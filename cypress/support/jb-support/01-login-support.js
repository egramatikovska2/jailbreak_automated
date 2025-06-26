function check_btn_text(selector, element, text, validation){
    cy.get(selector).find(element).contains(text).should(validation);
}
function click_btn(selector, element, text){
    cy.get(selector).find(element).contains(text).click();
}
function check_text(selector, element, text){
    cy.get(selector).find(element).should('contain',text)
}
function validate_input(selector, validator){
    cy.get(selector).should(validator)
}
function populate_input(selector, value){
    cy.get(selector).type(value)
}
function validate_network_map(){
    check_text('div[data-fluid="true"]','h1','Network Search')
    check_text('div[data-fluid="true"]','a','Network')
    check_text('div[data-fluid="true"]','a','Transporters')
    check_text('div[data-fluid="true"]','a','Reservations')
    check_text('div[data-fluid="true"]','a','Quick Allocation')
}

module.exports ={
    check_btn_text,
    click_btn,
    check_text,
    validate_input,
    populate_input,
    validate_network_map
}