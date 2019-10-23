describe('checklist item', () => {
  let checklist;
  const getItem = () => checklist.sections[0].tasks[0];
  const getCheckbox = () => cy.getByLabelText(getItem(checklist).name, { exact: false });

  beforeEach(() => {
    cy.fixture('checklist').then(f => {
      checklist = f;
      cy.visit(`/checklist/${checklist.slug}`);
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

  context('clearing all', () => {
    it('should be checked at the beginning', () => {
      const checkbox = getCheckbox();
      checkbox.check({force: true});
      checkbox.should('be.checked');
    });

    it('should be unchecked after click', () => {
      const button =  cy.getByText('clear');
      button.click();
      const checkbox = getCheckbox();
      checkbox.should('not.be.checked');
    });

    it('should be unchecked when refreshing', () => {
      const checkbox = getCheckbox();
      checkbox.should('not.be.checked');
    });
  });
});
