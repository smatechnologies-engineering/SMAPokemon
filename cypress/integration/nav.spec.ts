describe('nav bar functionality', () => {
    it('navigates to search on click', () => {
        cy.visit('localhost:3001')
        cy.get('[href="/search"]').click()
        cy.get('#findPokemonHeader')
            .should('be.visible')
            .contains('Find your Pokemon')
    }),
        it('navigates to home on click', () => {
            cy.get('[href="/"]').click()
            cy.get('#welcomeText')
                .should('be.visible')
                .contains('Welcome to')
        }),
        it('navigates to pokedex on click', () => {
            cy.get('[href="/pokedex"]').click()
            cy.get('#loadingText')
                .should('be.visible')
                .contains('Just a sec')
        })
})