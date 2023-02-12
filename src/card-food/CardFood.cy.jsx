import React from 'react'
import CardFood from './CardFood'

describe('<CardFood />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardFood />)
  })
})