describe('Home page', () => {
  beforeEach(() => cy.visit('/'));

  it('has the correct number of pattern blocks', () => {
    cy.readFile('src/utils/patterns.json').then((patterns) =>
      cy
        .get('[data-testid="pattern-card"]')
        .should('have.length', patterns.length),
    );
  });

  it('displays blocks correctly after filtering', () => {
    const inputValue = 'name';

    cy.get('[data-testid="input"]')
      .type(inputValue)
      .should('have.value', inputValue);

    cy.readFile('src/utils/patterns.json').then((patterns) => {
      const filteredPatterns = patterns.filter((pattern) =>
        pattern.tags.includes(inputValue.toLowerCase()),
      );

      cy.get('[data-testid="pattern-card"]').should(
        'have.length',
        filteredPatterns.length,
      );

      cy.url().should('include', `filter=${inputValue}`);
    });
  });

  it('copies the content of the pattern', () => {
    cy.readFile('src/utils/patterns.json').then((patterns) => {
      const { pattern } = patterns[0];

      cy.get('[data-testid="pattern-button"]')
        .first()
        .click({ scrollBehavior: false });

      cy.window().then((win) =>
        win.navigator.clipboard
          .readText()
          .then((text) => expect(text).to.eq(pattern)),
      );
    });
  });

  it('sorts patterns by tags', () => {
    cy.readFile('src/utils/patterns.json').then((patterns) => {
      const tag = 'url';

      const filteredPatterns = patterns.filter((pattern) =>
        pattern.tags.includes(tag.toLowerCase()),
      );

      cy.get('[data-testid="tag"]')
        .contains(tag)
        .first()
        .click({ scrollBehavior: 'center' });

      cy.get('[data-testid="pattern-card"]').should(
        'have.length',
        filteredPatterns.length,
      );

      cy.url().should('include', `filter=${tag}`);
    });
  });
});
