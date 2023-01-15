const documentHTMLContent =
  '<h2>Bloxt is a text editor that allows you to build article from blocks</h2><p>Just write down your ideas and <strong>sort them</strong> later by dragging up and down</p>';
const documentMarkdownContent =
  '## Bloxt is a text editor that allows you to build article from blocks\n\nJust write down your ideas and **sort them** later by dragging up and down';

describe('Board', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('delete all blocks', () => {
    cy.get('.DeleteAllBtn').click()
    cy.get('main').should('have.value', '')
    cy.get('[role="alert"]').eq(0).should('have.text', 'Deleted');
  })
  xit('copy document as markdown', () => {
    cy.get('main')
    cy.get('main').contains('Bloxt is a text editor that allows you to build article from blocksJust write down your ideas and sort them later by dragging up and down');
    cy.get('button').contains('Copy as Markdown').click();

    cy.window()
      .its('navigator.clipboard')
      .invoke('readText')
      .should('equal', documentMarkdownContent);

    cy.get('[role="alert"]').eq(0).should('have.text', 'Copied');
  });
});
