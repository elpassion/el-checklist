describe('checklist page', () => {
  const validId = '7';
  const invalidId = '8';

  beforeEach(() => {
    cy.server({force404: true});
    cy.route({
      method: 'GET',
      url: `/checklist/${validId}`,
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

    it('displays all items', () => {
      cy.fixture('checklist').then(f => {
        cy.contains('h1', f.name);

        f.sections.forEach(section => {
          cy.contains('h2', section.name);

          section.tasks.forEach(task => {
            cy.contains('h3', task.name);
          })
        })
      });
    });

    it('displays sections completion', () => {
      cy.fixture('checklist').then(f => {
        const section = f.sections[0];

        const donePoints = section.tasks[0].severity;
        const totalPoints = section.tasks.reduce((acc, task) =>  acc + task.severity, 0);

        cy.getAllByText('Done: 0%');

        const checkbox = cy.getByLabelText(section.tasks[0].name, { exact: false });
        checkbox.check({force: true});

        cy.getAllByText(`Done: ${donePoints / totalPoints * 100}%`);
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
