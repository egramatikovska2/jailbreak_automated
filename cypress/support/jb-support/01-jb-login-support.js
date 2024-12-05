
function check_input(element){
    cy.get(element).should('exist')
}
function fill_input(element, value) {
    cy.get(element).type(value);    
}
function assert_main_page(){
    check_fields_with_placeholder('Los Angeles, CA');
    check_fields_with_placeholder('Dallas, TX');
    cy.get('button[data-dates-input="true"]> span').contains('Start - End Date').should('exist')
    check_fields_with_placeholder('Number of pallets (CBs)');
    cy.get('button[type="button"]').find('span > span > p').contains('Search').should('exist')  
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
    fill_input,
    check_input,
    check_error_message,
    assert_main_page,
    assert_map_view,
    assert_list_view,
    check_header,
    check_stats
}