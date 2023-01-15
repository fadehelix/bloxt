import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I see at least one block', () => {
  cy.get('.Block');
});

When('I click {string} button', (text) => {
  cy.get('button').contains(text).click();
});

Then('I see notification {string}', function (message) {
  cy.get('[role="alert"]').eq(0).should('have.text', message);
});

Then('Clipboard contains text {string}', (text) => {
  cy.window()
    .its('navigator.clipboard')
    .invoke('readText')
    .should('equal', text);
});

Then('I see empty Board', () => {
  cy.get('.Block').should('not.exist');
});
