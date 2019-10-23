describe('checklists index', () => {
  beforeEach(() => {
    cy.server({ force404: true });
  });

  context('server working', () => {
    beforeEach(() => {
      cy.fixture('checklistsIndex').then(f => {
        cy.route({
          method: 'GET',
          url: '/checklists',
          response: 'fixture:checklistsIndex.json'
        });
        cy.route({
          method: 'GET',
          url: `/checklist/${f[0].slug}`,
          response: f,
        });

        cy.visit('/checklists');
      });
    });

    it('displays loader', () => {
      cy.getByText('loading')
    });

    it('displays data items', () => {
      cy.fixture('checklistsIndex').then(f => {
        cy.getByText(f[0].name);
      });
    });

    it('navigates to items', () => {
      cy.fixture('checklistsIndex').then(f => {
        const item = f[0];
        cy.getByText(item.name).click();
        cy
          .location('pathname')
          .should('eq', `/checklist/${item.slug}`);
      });
    });
  });

  context('server not working', () => {
    it('displays error', () => {
      cy.visit('/checklists');

      cy.contains('error')
    });
  });
});
