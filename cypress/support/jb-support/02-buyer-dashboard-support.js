

function map_marker(element, text, validation){
    cy.get('[aria-label="Map marker"]').find(element).contains(text).should(validation)
}
function map_marker_click(element, text){
    cy.get('[aria-label="Map marker"]').find(element).contains(text).parent().parent().click()
}
function assert_preview(index, text, validation){
    cy.get('[data-with-border="true"] > div:nth-child(2)').find('div > div > p')
    .eq(index).contains(text).should(validation)
}
function lane_preview_information(){
    assert_preview(0,'Origin','exist');
    assert_preview(1,'Lawrenceville, GA','exist');
    assert_preview(2,'373 Downing St','exist');
    assert_preview(3,'Destination','exist');
    assert_preview(4,'Kenai, AK','exist');
    assert_preview(5,'1523 Stellar Dr','exist');
    cy.get('[role="separator"]').next('p').contains('Service days').should('exist')
    cy.get('[data-circle="true"]').should('have.length',7)
    cy.get('[data-circle="true"]').find('span').contains('M').parent()
    .should('have.css','color','rgb(20, 37, 45)');
    cy.get('[data-circle="true"]').find('span').contains('W').parent()
    .should('have.css','color','rgb(20, 37, 45)');
    cy.get('[data-circle="true"]').find('span').contains('F').parent()
    .should('have.css','color','rgb(20, 37, 45)');
}

function assert_lanes_list(){
    cy.get('.mapboxgl-canvas').should('not.exist')
    cy.get('button[type="button"] > span > span:nth-child(2)').contains('Map View').parent().parent()
    .should('have.attr','data-variant','outline')
    cy.get('button[type="button"] > span > span:nth-child(2)').contains('List View').parent().parent()
    .should('have.attr','data-variant','filled')

}
module.exports ={
    map_marker,
    map_marker_click,
    assert_preview,
    lane_preview_information,
    assert_lanes_list,
}