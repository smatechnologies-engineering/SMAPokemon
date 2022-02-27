describe('first visit', () => {
  it('opens to the home page', () => {
    cy.visit('localhost:3001')
    cy.get('#welcomeText').contains('Welcome to Pokemon Central!')
  }),
    it('verifies home page content', () => {
      cy.get('#pokemonLogo').should('be.visible')
      cy.get('[data-testid=CatchingPokemonIcon]').should('be.visible')
      cy.get('#welcomeText').should('be.visible')
    })
})
