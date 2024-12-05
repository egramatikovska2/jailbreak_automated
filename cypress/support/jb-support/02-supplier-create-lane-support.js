function check_btn_text(element, selector, text, validation){
    cy.get(element).find(selector).contains(text).should(validation);
}
function click_btn(element, selector, text){
    cy.get(element).find(selector).contains(text).click();
}
function role_dialog(index, validation, additional_validation){
    cy.get('[role="dialog"]').eq(index).should(validation)
}
module.exports = {
    check_btn_text,
    click_btn,
    role_dialog
}