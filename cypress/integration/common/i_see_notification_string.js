import {Then, When} from "cypress-cucumber-preprocessor/steps";

When('I click {string} button', (text) => {
    cy.get('button').contains(text).click()
})

Then('I see notification {string}', function (message) {
    cy.get('[role="alert"]').eq(0).should('have.text', message);
});

Then('Clipboard contains text {string}', (text) => {
    cy.window().its('navigator.clipboard')
        .invoke('readText').should('equal', text)
})