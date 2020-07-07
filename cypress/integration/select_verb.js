/// <reference types="cypress" />

context('Select existing word from autocomplete list', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Answer correctly all forms', () => {
    cy.get('#questionInput').type('be');

    cy.get('#firstAnswer').as('firstAnswer').type('was').blur();
    cy.get('@firstAnswer').parent().should('have.class', 'answer--isCorrect')
    cy.get('#secondAnswer').type('been').blur().as('secondAnswer');
    cy.get('@secondAnswer').parent().should('have.class', 'answer--isCorrect')
  })

  it('Answer incorrectly to second form', () => {
    cy.get('#questionInput').type('be');

    cy.get('#firstAnswer').as('firstAnswer').type('what').blur();
    cy.get('@firstAnswer').parent().should('have.class', 'answer--isIncorrect')
  })
})