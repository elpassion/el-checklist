describe('checklist page', () => {
  const validSlug = 'spa-basics';
  const invalidSlug = 'worst-practices';

  context('valid slug', () => {
    beforeEach(() => {
      cy.visit(`/checklist/${validSlug}`);
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

  context('invalid slug', () => {
    beforeEach(() => {
      cy.visit(`/checklist/${invalidSlug}`);
    });

    it('redirects to list ', () => {
      cy
        .location('pathname')
        .should('eq', '/checklists');
    });
  })
});
