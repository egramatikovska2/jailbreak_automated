
function check_btn_text(selector, element, text, validation){
    cy.get(selector).find(element).contains(text).should(validation);
}
function click_btn(selector, element, text){
    cy.get(selector).find(element).contains(text).click();
}
function role_dialog(role, index, text, validation){
    cy.get(role).eq(index).contains(text).should(validation)
}
function fill_input(selector,index, validation, value){
    cy.get(selector).eq(index).should(validation).type(value)
}
function origin_gateway(){
    cy.get('input[placeholder="Start typing..."]').type(' ')
    click_btn('[role="option"]','span','373 Downing St Lawrenceville'); 
    cy.get('[role="alert"]').should('have.length', 1)
    cy.get('label').contains('Gateway 1 (Origin)').should('exist')
    cy.get('input[value="373 Downing St Lawrenceville"]').should('exist')  
}
function destination_gateway(){
    cy.get('[role="dialog"]').scrollTo('top');
    cy.get('input[placeholder="Start typing..."]').should('exist').type(' ', {force: true})
    click_btn('[role="option"]','span','1523 Stellar Dr Kenai');
    cy.get('[role="alert"]').should('have.length', 1)
    cy.get('label').contains('Gateway 2 (Destination)').should('exist')
    cy.get('input[value="1523 Stellar Dr Kenai"]').should('exist')
    check_btn_text('button[type="button"]','span > span', 'Create New Gateway','not.exist')
}
function assert_td(table_component, tb_index, tr_index, element, text, validation){
    cy.get(table_component).eq(tb_index).find('tr').eq(tr_index).find(element).contains(text).should(validation)
}
function assert_lane(){
    assert_td('table > tbody',0,0,'td','Lawrenceville, GA','exist');
    assert_td('table > tbody',0,0,'td','Kenai, AK','exist');
    //assert_td('table> tbody',0,0,'td','140','exist');
    //assert_td('table> tbody',0,0,'td','140','exist');
    assert_td('table> tbody',0,0,'td','0','exist');
    assert_td('table> tbody',0,0,'td','Mon, Wed, Fri','exist');
}
module.exports ={
    check_btn_text,
    click_btn,
    role_dialog,
    fill_input,
    origin_gateway,
    destination_gateway,
    assert_td,
    assert_lane
}