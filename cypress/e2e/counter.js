describe('counter', () => {
  it('can visit main page', () => {
    cy.visit('/');
  });

  it('can click counter buttons', () => {
    cy
      .visit('/counter')
      .getByText('increase it')
      .click()
      .click()
      .click();
    cy.getByTestId('counter-value').should('contain', '3')
  })
});
