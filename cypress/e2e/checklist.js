describe('checklist page', () => {
  const validId = '7';
  const invalidId = '8';

  beforeEach(() => {
    cy.server({force404: true});
    cy.route({
      method: 'GET',
      url: '/checklist/7',
      response: 'fixture:checklist.json'
    });
  });

  context('valid id', () => {
    beforeEach(() => {
      cy.visit(`/checklist/${validId}`);
    });

    it('displays loader', () => {
      cy.getByText('loading')
    });

    it('displays data', () => {
      cy.fixture('checklist').then(f => {
        cy.contains('h1', f.name);

        f.sections.forEach(section => {
          cy.contains('h2', section.name);

          section.items.forEach(item => {
            cy.contains('h3', item.title);
          })
        })
      });
    });
  });

  context('invalid id', () => {
    beforeEach(() => {
      cy.visit(`/checklist/${invalidId}`);
    });

    it('redirects to list ', () => {
      cy
        .location('pathname')
        .should('eq', '/checklists');
    });
  })
});
