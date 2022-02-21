const Locators = {
  HomePage: '[data-qa=home-page]',
  PokedexPage: '[data-qa=pokedex-page]',
  SearchPage: '[data-qa=search-page]',
  HomeLink: '[data-qa=home-link]',
  PokedexLink: '[data-qa=pokedex-link]',
  SearchLink: '[data-qa=search-link]',
  SearchInput: '[data-qa=search-input]',
  PokemonInfoCard: (pokemon: string) =>
    `[data-qa=pokemon-info-card-${pokemon}]`,
}

export const isOnHomePage = () => {
  cy.get(Locators.HomePage)
}

export const isOnPokedexPage = () => {
  cy.get(Locators.PokedexPage)
}

export const isOnSearchPage = () => {
  cy.get(Locators.SearchPage)
}

export const visitHomePage = () => {
  cy.visit('localhost:3001')
}

export const visitPokedexPage = () => {
  cy.visit('localhost:3001/pokedex')
}

export const visitSearchPage = () => {
  cy.visit('localhost:3001/search')
}

export const navigateToHomePage = () => {
  cy.get(Locators.HomeLink).click()
}

export const navigateToPokedexPage = () => {
  cy.get(Locators.PokedexLink).click()
}

export const navigateToSearchPage = () => {
  cy.get(Locators.SearchLink).click()
}

export const typeInSearchInput = (input: string) => {
  cy.get(Locators.SearchInput).type(input)
}

export const clearSearchInput = () => {
  cy.get(Locators.SearchInput).clear()
}

export const isPokemonInfoCardVisible = (input: string) => {
  cy.get(Locators.PokemonInfoCard(input))
}
