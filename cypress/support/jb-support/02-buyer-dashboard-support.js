

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
    cy.get('[data-circle="true"]').should('have.length.at.least',7)
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

function assert_lanes_details(){
    cy.get('p').find('a[href="/lanes"]').should('exist')
    cy.get('button[type="button"]').find('span > span:nth-child(2)').contains('Calendar View').parent().parent()
    .should('have.attr','data-variant','filled')
    cy.get('button[type="button"]').find('span > span:nth-child(2)').contains('List View').parent().parent()
    .should('have.attr','data-variant','outline')
    cy.get('[role="alert"]').eq(0).should('exist')
    cy.get('div[data-with-border="true"] > div > p').contains('Total Reservation').should('exist')
    cy.get('div[data-with-border="true"] > div > p').contains('Start by selecting your capacity').should('exist')
    cy.get('div[data-with-border="true"] > div > p').contains("It looks like you haven't set any capacity blocks for the weekdays yet. Use the distribution tool or manually select the maximum capacity for each day to get started.").should('exist')
    cy.get('.react-calendar').should('exist').should('be.visible')
    cy.get('.react-calendar').find('button').eq(0).should('have.attr','class','react-calendar__navigation__arrow react-calendar__navigation__prev-button')
    cy.get('.react-calendar').find('button').eq(2).should('have.attr','class','react-calendar__navigation__arrow react-calendar__navigation__next-button')
}

function open_lane(td_index1, td_index2, td_value1, td_value2){
    cy.get('table > tbody > tr').filter((index, row) => {
    const tds = Cypress.$(row).find('td')
    const origin = tds.eq(td_index1).text().trim()
    const destination = tds.eq(td_index2).text().trim()
    return origin === td_value1 && destination === td_value2
  }).first().click()
  /*
  .should('have.length', 1) // Ensure only one row matches
  .within(() => {
    // Further assertions within the matching row
    cy.get('td').eq(0).should('contain', '02d866c7'); // Assert Lane ID
    cy.get('td').eq(3).should('contain', 'Supplier Org'); // Assert Supplier
    cy.get('td').eq(4).should('contain', 'M T W T F'); // Assert Service days
  });
  */

}
module.exports ={
    map_marker,
    map_marker_click,
    assert_preview,
    lane_preview_information,
    assert_lanes_list,
    assert_lanes_details,
    open_lane,
}