describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can go to home page', () => {
    cy
      .getByText('Home')
      .click();
    cy
      .location('pathname')
      .should('eq', '/');
  });

  it('can go to counter page', () => {
    cy
      .getByText('Counter')
      .click();
    cy
      .location('pathname')
      .should('eq', '/counter');
  });

  it('can go to checklists page', () => {
    cy
      .getByText('Checklists')
      .click();
    cy
      .location('pathname')
      .should('eq', '/checklists');
  });
});
