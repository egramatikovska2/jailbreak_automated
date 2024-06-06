function reset_JB() {
    cy.wait(1000);  // Add a short delay to ensure the DOM is fully loaded
    cy.get('body').then($body => {
        const tbodys = $body.find('tbody');
        const tbodyLength = tbodys.length;

        if (tbodyLength === 0) {
            cy.request({
                method: 'POST',
                url: Cypress.env('JAILBREAK_APIHOST') + 'api/v1/login/access-token',
                form: true,
                body: {
                    username: Cypress.env('JAILBREAK_API_USERNAME'),
                    password: Cypress.env('JAILBREAK_API_PASS')
                }
            }).then(response => {
                const token = response.body.access_token;
                cy.wrap(token).as('authToken');

                cy.get('@authToken').then(token => {
                    cy.request({
                        method: 'POST',
                        url: Cypress.env('JAILBREAK_APIHOST') + 'api/v1/system/reset',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(() => {
                        cy.reload();
                    });
                });
            });
        } 
    });
}

module.exports = {
    reset_JB
}