describe('counter', () => {
  it('can visit main page', () => {
    cy.visit('/');
  });

  it('can click buttons', () => {
    cy
      .visit('/')
      .getByText('increase it')
      .click()
      .click()
      .click();
    cy.getByTestId('counter-value').should('contain', '3')
  })
});
