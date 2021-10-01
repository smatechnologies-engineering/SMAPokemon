//
describe('first visit', () => {
  it('works', () => {
    cy.visit('localhost:3001')
    cy.get('input').type('pikachu{enter}')
  })
})
