/// <reference types="cypress" />

context('Type first form of verb', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#questionInput').type('be').wait(1000);
    
  })

  it('Answer correctly all forms', () => {
    cy.get('.answer:first input').as('firstAnswer').type('was').blur();
    cy.get('@firstAnswer').parent().should('have.class', 'answer--isCorrect')
    cy.get('.answer:last input').type('been').blur().as('secondAnswer');
    cy.get('@secondAnswer').parent().should('have.class', 'answer--isCorrect')
  })

  it('Answer incorrectly to second form', () => {
    cy.get('.answer:first input').as('firstAnswer').type('what').blur();
    cy.get('@firstAnswer').parent().should('have.class', 'answer--isIncorrect')
  })
})