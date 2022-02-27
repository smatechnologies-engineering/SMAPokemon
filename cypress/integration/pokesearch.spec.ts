describe('search page functionality', () => {
  it('searches for a pokemon', () => {
    cy.visit('localhost:3001')
    cy.get('[href="/search"]').click()
    cy.get('#findPokemonHeader')
      .should('be.visible')
      .contains('Find your Pokemon')
    cy.get('#searchInput').should('be.visible').type('pikachu{enter}')
    cy.get('#clearBtn').should('be.visible')
    cy.get('#clearBtn').click()
    cy.get('#clearBtn').should('not.exist')
  })
})
