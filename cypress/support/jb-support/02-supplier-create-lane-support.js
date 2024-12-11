function check_btn_text(selector, element, text, validation){
    cy.get(selector).find(element).contains(text).should(validation);
}
function click_btn(selector, element, text){
    cy.get(selector).find(element).contains(text).click();
}
function role_dialog(index, validation, additional_validation){
    cy.get('[role="dialog"]').eq(index).should(validation)
}
function fill_input(selector, validation, value){
    cy.get(selector).should(validation).type(value)
}
module.exports = {
    check_btn_text,
    click_btn,
    role_dialog,
    fill_input
}