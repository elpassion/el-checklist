const setAllCheckboxes = (checklistFixture, value = false) => {
  checklistFixture.sections.forEach(section => {
    section.tasks.forEach(task => {
      const checkbox = cy.getByLabelText(task.name, { exact: false });
      checkbox[value ? 'check' : 'uncheck']({ force: true });
    });
  });
};

describe('checklist page', () => {
  let validSlug = '';
  const invalidSlug = 'worst-practices';

  context('valid slug', () => {
    beforeEach(() => {
      cy.fixture('_checklist').then(f => {
        validSlug = f.slug;
        cy.visit(`/checklist/${validSlug}`);
      });
    });

    context('rendering', () => {
      it('renders `back to all` link', () => {
        cy.getByText('Back to all', { exact: false }).click();
        cy.location('pathname').should('eq', '/checklists');
      });

      it('renders all items', () => {
        cy.fixture('_checklist').then(f => {
          cy.contains('h1', f.name);

          f.sections.forEach(section => {
            cy.contains('h2', section.name);

            section.tasks.forEach(task => {
              cy.contains('h3', task.name);
            });
          });
        });
      });

      it('renders section as closed if was fully completed on previous visit', () => {
        cy.fixture('_checklist').then(f => {
          const content = f.sections[0].tasks[0].name;
          setAllCheckboxes(f, true);

          cy.visit(`/checklist/${validSlug}`);

          cy.contains(content).should('be.not.visible');
        });
      });

      it('renders section as open if not fully completed on previous visit', () => {
        cy.fixture('_checklist').then(f => {
          const content = f.sections[0].tasks[0].name;
          setAllCheckboxes(f, false);

          cy.visit(`/checklist/${validSlug}`);

          cy.contains(content).should('be.visible');
        });
      });

      it('displays sections completion', () => {
        cy.fixture('_checklist').then(f => {
          setAllCheckboxes(f, false);

          const section = f.sections[0];

          const donePoints = section.tasks[0].severity;
          const totalPoints = section.tasks.reduce((acc, task) => acc + task.severity, 0);

          cy.getAllByText('Done: 0%');

          const checkbox = cy.getByLabelText(section.tasks[0].name, { exact: false });
          checkbox.check({ force: true });

          cy.getAllByText(`Done: ${Math.round((donePoints / totalPoints) * 100)}%`);
        });
      });
    });

    context('clearing', () => {
      it('requires a confirmation on `clear` click', () => {
        let confirmed = false;
        cy.on('window:confirm', msg => {
          confirmed = msg.includes('Are you sure');
        });

        const clearButton = cy.getByText('clear', { exact: false });

        return clearButton.click().then(() => expect(confirmed).equal(true));
      });

      it('clears all data on click', () => {
        cy.fixture('_checklist').then(f => {
          const sectionsLengthString = f.sections.length.toString();
          setAllCheckboxes(f, true);
          cy.getAllByText(`Done: 100%`).should('have.length', sectionsLengthString);

          const clearButton = cy.getByText('clear', { exact: false });
          clearButton.click();

          cy.getAllByText(`Done: 0%`).should('have.length', sectionsLengthString);
        });
      });
    });
  });

  context('invalid slug', () => {
    beforeEach(() => {
      cy.visit(`/checklist/${invalidSlug}`);
    });

    it('redirects to list ', () => {
      cy.location('pathname').should('eq', '/checklists');
    });
  });
});
