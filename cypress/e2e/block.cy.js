const blockContent = 'Example text';
const isTextEditorVisible = () => cy.get('.quill').eq(0).should('be.visible');

describe('Block', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Change block content', () => {
    cy.get('.Block');
    cy.enterBlockEditMode(0);
    isTextEditorVisible();

    cy.get('[contentEditable=true]').first().clear().type(blockContent);
    cy.get('.ButtonSave').first().click();

    cy.get('.Block').eq(0).should('have.text', blockContent);
  });

  it('Avoid to create an empty block', () => {
    cy.get('.Block');
    cy.enterBlockEditMode(0);
    isTextEditorVisible();
    cy.get('[contentEditable=true]').first().clear();

cy.get('.ButtonSave').first().click();

cy.get('[role="alert"]').eq(0).should('have.text', 'Block content cannot be empty');
isTextEditorVisible();

  })
});
