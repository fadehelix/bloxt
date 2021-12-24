import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.visit('http://localhost:3000');
});

Given('I see at least one block', () => {
  cy.get('.Block');
});

When('I click block Edit button', () => {
  cy.editBlock(0);
});

When('I replace content with text {string}', (text) => {
  cy.get('[contentEditable=true]').first().clear().type(text);
});
When('I save Block', () => {
  cy.get('.ButtonSave').first().click();
});
Then('I see block with text {string}', (text) => {
  cy.get('.Block').eq(0).should('have.text', text);
});
