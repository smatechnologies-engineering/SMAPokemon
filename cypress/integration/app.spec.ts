import * as PageObjects from './PageObjects'

describe('Home Page', () => {
  it('should load home page when going directly to /', () => {
    PageObjects.visitHomePage()
    PageObjects.isOnHomePage()
  })
})

describe('Pokedex Page', () => {
  it('should load pokedex page when going directly to /pokedex', () => {
    PageObjects.visitPokedexPage()
    PageObjects.isOnPokedexPage()
  })
})

describe('Search Page', () => {
  it('should load search page when going directly to /search', () => {
    PageObjects.visitSearchPage()
    PageObjects.isOnSearchPage()
  })
  it('should successfully search for a pokemon', () => {
    PageObjects.visitSearchPage()
    PageObjects.typeInSearchInput('pikachu')
    PageObjects.isPokemonInfoCardVisible('pikachu')
  })
  it('should successfully search for a second pokemon', () => {
    PageObjects.visitSearchPage()
    PageObjects.typeInSearchInput('pikachu{enter}')
    PageObjects.isPokemonInfoCardVisible('pikachu')
    PageObjects.clearSearchInput()
    PageObjects.typeInSearchInput('raichu')
    PageObjects.isPokemonInfoCardVisible('raichu')
  })
})

describe('Header', () => {
  it('should navigate to home page when on a different page and clicking on pokemon logo in header', () => {
    PageObjects.visitSearchPage()
    PageObjects.navigateToHomePage()
    PageObjects.isOnHomePage()
  })
  it('should navigate to pokedex page when on a different page and clicking on pokedex link in header', () => {
    PageObjects.visitHomePage()
    PageObjects.navigateToPokedexPage()
    PageObjects.isOnPokedexPage()
  })
  it('should navigate to search page when on a different page and clicking on search link in header', () => {
    PageObjects.visitHomePage()
    PageObjects.navigateToSearchPage()
    PageObjects.isOnSearchPage()
  })
})
