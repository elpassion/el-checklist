import removeMd from 'remove-markdown';

describe('checklist item', () => {
  let checklist;
  const getItem = () => checklist.sections[0].tasks[0];
  const getCheckbox = () => cy.getByLabelText(getItem().name, { exact: false });
  const getTaskProperty = property =>
    checklist.sections.reduce((acc, section) => {
      if (acc) {
        return acc;
      }
      const taskWithDescription = section.tasks.find(task => !!task[property]);
      return taskWithDescription ? removeMd(taskWithDescription[property]) : null;
    }, null);

  beforeEach(() => {
    cy.fixture('_checklist').then(f => {
      checklist = f;
      cy.visit(`/checklist/${checklist.slug}`);
    });
  });

  context('rendering', () => {
    context('description', () => {
      let content;
      beforeEach(() => {
        content = getTaskProperty('description');
      });

      it('hide description specifics initially', () => {
        if (content) {
          cy.contains(content).should('be.not.visible');
        }
      });

      it('show description specifics after label click', () => {
        if (content) {
          cy.contains('Description').click();
          cy.contains(content).should('be.visible');
        }
      });
    });

    context('solution', () => {
      let content;
      beforeEach(() => {
        content = getTaskProperty('solution');
      });

      it('hide solution specifics initially', () => {
        if (content) {
          cy.contains(content).should('be.not.visible');
        }
      });

      it('show solution specifics after label click', () => {
        if (content) {
          cy.contains('Solution').click();
          cy.contains(content).should('be.visible');
        }
      });
    });
  });

  context('checking and unchecking', () => {
    it('should be unchecked at the beginning (for test purposes)', () => {
      const checkbox = getCheckbox();
      checkbox.uncheck({ force: true });
      checkbox.should('not.be.checked');
    });

    it('should be checked after first click', () => {
      const checkbox = getCheckbox();
      checkbox.click({ force: true });
      checkbox.should('be.checked');
    });

    it('should be checked when refreshing', () => {
      const checkbox = getCheckbox();
      checkbox.should('be.checked');
    });

    it('should be unchecked after second click', () => {
      const checkbox = getCheckbox();
      checkbox.click({ force: true });
      checkbox.should('not.be.checked');
    });

    it('should be unchecked when refreshing', () => {
      const checkbox = getCheckbox();
      checkbox.should('not.be.checked');
    });
  });
});
