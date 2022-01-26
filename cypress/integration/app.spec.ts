describe('test app', () => {

  it('should load only 20 pokemon intially', () => {
    cy.visit('localhost:3001')
    cy.get('.MuiGrid-container').children().should('have.length', 20)
  })

  it('navigates to search correctly', () => {
    cy.get('#search-link').click()
    cy.url().should('include', 'search')
  })

  it('should find and show pokemon', () => {
    cy.get('input').type('pikachu')
    cy.get('form').submit()
    cy.get('.MuiCard-root').should('exist')
  })

  it('should render error message', () => {
    cy.get('input').type('pdsdfhusfd')
    cy.get('form').submit()
    cy.get('.MuiAlert-message').should('exist')
  })
})
