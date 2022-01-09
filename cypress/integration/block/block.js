import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const isTextEditorVisible = () => cy.get('.quill').eq(0).should('be.visible');

Before(() => {
  cy.visit('http://localhost:3000');
});

When('I click block Edit button', () => {
  cy.enterBlockEditMode(0);
  isTextEditorVisible();
});

Given('I am in the Block edit mode', function () {
  cy.enterBlockEditMode(0);
});
Given('Block content is empty', function () {
  cy.get('[contentEditable=true]').first().clear();
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
Then('I am still in the Block edit mode', function () {
  isTextEditorVisible();
});
