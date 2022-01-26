describe('test search', () => {
  it('navigates to search and enters search text', () => {
    cy.visit('localhost:3001')
    cy.get('#search-link').click()
    cy.url().should('include', 'search')
    cy.get('input').type('pikachu')
    cy.get('form').submit()
    cy.get('.MuiCard-root').should('exist')
  })
})
