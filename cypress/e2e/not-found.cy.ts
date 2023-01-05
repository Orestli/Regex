describe('Not found page', () => {
  it('returns to home page', () => {
    const notFoundUrl = '/404';

    cy.visit(notFoundUrl, { failOnStatusCode: false });

    cy.url().should('include', notFoundUrl);

    cy.get('[data-testid="back-home-button"]').click();

    cy.url().should('include', '/');
  });
});
