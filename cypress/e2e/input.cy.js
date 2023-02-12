/// <reference types="Cypress"/>
describe('input typing test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/add");

    })
    it("add list input router including some collection", () => {
        cy.get('h1').should('have.text', 'add recipes')
        cy.get('input').first().type('name of the food')
        cy.get('input').eq(1).type('food author')
        cy.get('select').select('Japan').should('have.value', 'Japan')

    })

    it('add more ingredient to have more input', async () => {
        cy.contains('more ingredients +').click()
        cy.contains('label', 'unit').should('have.length', 2)

    })
})