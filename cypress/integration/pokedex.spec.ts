describe('pokedex functionality', () => {
  it('shows spinner and random pokemon until data is fetched', () => {
    cy.visit('localhost:3001')
    cy.get('[href="/pokedex"]').click()
    cy.get('#loadingText').should('be.visible').contains('Just a sec')
    cy.get('#pokeImage').should('be.visible')
    // I know this is bad, with more time I would learn more cypress to wait for the fetch calls to complete
    // rather than set a timeout.
    cy.wait(15000)
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiPaper-root').should(
      'be.visible'
    )
  })
})
