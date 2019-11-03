describe('checklists index page', () => {
  const CHECKLISTS_PATH = '/checklists';

  context('valid path', () => {
    beforeEach(() => {
      cy.visit(CHECKLISTS_PATH);
    });

    it('renders title', () => {
      cy.getByText('Available Checklists', { exact: false })
    });

    it('renders links to specific cheklists', () => {
      cy.getByText('SPA Basics', { exact: false })
    });
  });

  context('invalid path', () => {
    beforeEach(() => {
      cy.visit(`/invalid-path`);
    });

    it('redirects to `checklists` path', () => {
      cy
        .location('pathname')
        .should('eq', CHECKLISTS_PATH);
    });
  });
});
