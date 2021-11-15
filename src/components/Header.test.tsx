import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'
import { Router, MemoryRouter } from 'react-router'
import { createMemoryHistory } from 'history'

describe('<Header />', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the App Logo', () => {
    // arrange, act
    render(
      <MemoryRouter>
        <Header className="App-header" />
      </MemoryRouter>
    )
    const appLogo = screen.getByAltText('logo')

    // assert
    expect(appLogo).toBeInTheDocument()
  })

  it('renders a Search button', () => {
    // arrange, act
    render(
      <MemoryRouter>
        <Header className="App-header" />
      </MemoryRouter>
    )
    const searchButton = screen.getByText('Search')

    // assert
    expect(searchButton).toBeInTheDocument()
  })

  it('renders a Pokedex button', () => {
    // arrange, act
    render(
      <MemoryRouter>
        <Header className="App-header" />
      </MemoryRouter>
    )
    const pokedexButton = screen.getByText('Pokedex')

    // assert
    expect(pokedexButton).toBeInTheDocument()
  })

  it('redirects to / when the App Logo is clicked', () => {
    // arrange
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header className="App-header" />
      </Router>
    )
    const appLogo = screen.getByAltText('logo')

    // act
    fireEvent.click(appLogo)

    // assert
    expect(history.location.pathname).toBe('/')
  })

  it('redirects to /search when the Search button is clicked', () => {
    // arrange
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header className="App-header" />
      </Router>
    )
    const searchButton = screen.getByText('Search')

    // act
    fireEvent.click(searchButton)

    // assert
    expect(history.location.pathname).toBe('/search')
  })

  it('redirects to /pokedex when the Pokedex button is clicked', () => {
    // arrange
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Header className="App-header" />
      </Router>
    )
    const pokedexButton = screen.getByText('Search')

    // act
    fireEvent.click(pokedexButton)

    // assert
    expect(history.location.pathname).toBe('/search')
  })
})
