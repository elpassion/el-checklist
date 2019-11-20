describe('checklists index page', () => {
  const CHECKLISTS_PATH = '/checklists';
  const CHECKLIST_PATH = '/checklist';

  context('valid path', () => {
    beforeEach(() => {
      cy.visit(CHECKLISTS_PATH);
    });

    it('renders title', () => {
      cy.getByText('Available Checklists', { exact: false });
    });

    it('renders links to specific checklists', () => {
      cy.fixture('_checklists-index').then(checklists => {
        checklists.forEach(checklist => {
          cy.getByText(checklist.name, { exact: false })
            .should('have.attr', 'href')
            .and('eq', `${CHECKLIST_PATH}/${checklist.slug}`);
        });
      });
    });
  });

  context('invalid path', () => {
    beforeEach(() => {
      cy.visit(`/invalid-path`);
    });

    it('redirects to `checklists` path', () => {
      cy.location('pathname').should('eq', CHECKLISTS_PATH);
    });
  });
});
