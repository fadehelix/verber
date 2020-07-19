/// <reference types="cypress" />


context('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Go to search page', () => {
    cy.contains('Search for a verb').click();
    cy.get('h2').should('contain', 'Search');
  })

  it('Go to challenge page', () => {
    cy.contains('Take a challenge').click();
    cy.get('h2').should('contain', 'Challenge');
  })
})