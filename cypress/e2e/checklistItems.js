describe('checklist item', () => {
  let checklist;
  const getItem = () => checklist.sections[0].tasks[0];
  const getCheckbox = () => cy.getByLabelText(getItem().name, { exact: false });

  beforeEach(() => {
    cy.fixture('checklist').then(f => {
      checklist = f;
      cy.visit(`/checklist/${checklist.slug}`);
    });
  });

  context('rendering', () => {

    context('description', () => {
      const content = 'would be around 55 characters';

      it('should render description markdown as proper html', () => {
        cy.contains('strong', content);
      });

      it('hide description specifics initially', () => {
        cy.contains( content).should('be.not.visible');
      });

      it('show description specifics after label click', () => {
        cy.contains( 'Description').click();
        cy.contains( content).should('be.visible');
      });
    });

    context('solution', () => {
      const content = '<title>Page Title</title>';

      it('should render solution markdown as proper html', () => {
        cy.contains('code', content);
      });

      it('hide solution specifics initially', () => {
        cy.contains( content).should('be.not.visible');
      });

      it('show solution specifics after label click', () => {
        cy.contains( 'Solution').click();
        cy.contains( content).should('be.visible');
      });
    });
  });

  context('checking and unchecking', () => {
    it('should be unchecked at the beginning', () => {
      const checkbox = getCheckbox();
      checkbox.uncheck({force: true});
      checkbox.should('not.be.checked');
    });

    it('should be checked after first click', () => {
      const checkbox = getCheckbox();
      checkbox.click({force: true});
      checkbox.should('be.checked');
    });

    it('should be checked when refreshing', () => {
      const checkbox = getCheckbox();
      checkbox.should('be.checked');
    });

    it('should be unchecked after second click', () => {
      const checkbox = getCheckbox();
      checkbox.click({force: true});
      checkbox.should('not.be.checked');
    });

    it('should be unchecked when refreshing', () => {
      const checkbox = getCheckbox();
      checkbox.should('not.be.checked');
    });
  });
});
