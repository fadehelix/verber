/// <reference types="cypress" />


context('Randomly generated first form of verb', () => {
  before(() => {
    cy.visit("/challenge")
    cy.server();
    cy.route({
      url: "/api/all",
      method: "GET",
      response: 'fixture:verbs.json'
    })
  })

  it('Generate random verb', () => {
    cy.get('.RandomVerb').should('not.be.empty')
  })
})