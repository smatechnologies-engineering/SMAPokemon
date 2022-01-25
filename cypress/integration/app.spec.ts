describe('test search', () => {
  it('navigates to search and enters search text', () => {
    cy.visit('localhost:3001')
    cy.get('#search-link').click()
    cy.url().should('include', 'search')
    cy.get('input').type('pikachu')
    // app errors will crash this test, also .wait is flakey
    cy.wait(3000)
    cy.get('.MuiCard-root').should('exist')
  })
})
