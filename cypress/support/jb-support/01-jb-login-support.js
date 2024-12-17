

function check_input(element){
    cy.get(element).should('exist')
}
function assert_map_view(){
    cy.get('button[type="button"]').eq(4).should('have.attr','data-variant','filled')
    cy.get('button[type="button"]').eq(5).should('have.attr','data-variant','outline')
}
function assert_list_view(){
    cy.get('button[type="button"]').eq(5).should('have.attr','data-variant','filled')
    cy.get('button[type="button"]').eq(4).should('have.attr','data-variant','outline')
}
function check_error_message(element, text, assertion){
    cy.get('[role="alert"]').find(element).contains(text).should(assertion)
}
function check_header(header, text){
    cy.get(header).contains(text).should('exist')
}
function check_stats(index, element, id, p, value){
    cy.get('[data-with-border="true"]').eq(index).find(element).eq(id).find(p).should('contain', value)
}
module.exports = {
    check_input,
    check_error_message,
    assert_map_view,
    assert_list_view,
    check_header,
    check_stats
}