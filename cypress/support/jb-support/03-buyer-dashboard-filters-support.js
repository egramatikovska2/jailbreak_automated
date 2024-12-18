const lane_support = require('./02-supplier-create-lane-support');
const dashboard_support = require('./02-buyer-dashboard-support');

function search_results_origin(){
    cy.wait(2000)
    cy.get('[aria-label="Map marker"]').should('have.length',1)
    dashboard_support.map_marker('div > span','Lawrenceville, GA ','exist');
    dashboard_support.map_marker_click('div > span','Lawrenceville, GA ');
    cy.wait(2000)
    cy.get('[aria-label="Map marker"]').should('have.length.at.least',2)
    dashboard_support.lane_preview_information();
}

function date_range_all(){
    lane_support.check_btn_text('button[data-dates-input="true"]','span','Start - End Date','exist');
    lane_support.click_btn('button[data-dates-input="true"]','span','Start - End Date');
    cy.get('[data-calendar="true"]').should('exist')
    cy.get('[data-calendar="true"]').find('tbody').should('exist')
    cy.get('[data-today="true"]').should('exist').click()
}

/*
needs to be finished
function findTodaysDateRow() {
    cy.get('.mantine-DatePickerInput-monthRow').each(($row, index) => {
        if ($row.find('[data-today="true"]').length === 4) {
            cy.get('')
        }
    });
}
*/




module.exports = {
    date_range_all,
    search_results_origin, 
}