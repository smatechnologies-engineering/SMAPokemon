describe('test search', () => {
  before(() => {
    cy.visit('localhost:3001')
    cy.get('#search-link').click()
  })

  it('navigates to search correctly', () => {
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
