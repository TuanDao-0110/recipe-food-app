/// <reference types="Cypress"/>

describe('router traveling by button', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('get into recipe list router by let find out button', () => {
    cy.get('button').should('have.text', ' let find out')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/recipe_list')
  })
  it('get into list router by click navigate', () => {
    cy.contains('recipe list').click()
    cy.url().should('eq', 'http://localhost:3000/recipe_list')
  })
  it('get into add list router by click navigate', () => {
    cy.contains('add recipe').click()
    cy.url().should('eq', 'http://localhost:3000/add')
  })


})

