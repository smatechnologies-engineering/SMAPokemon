import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import App from './App'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { Router } from "react-router-dom"
import Navbar from './components/Navbar'

test('app renders pokemon logo', () => {
  render(<App />)
  const imgElement = screen.getByAltText(/Logo/i)
  expect(imgElement).toBeInTheDocument()
})

test('app renders main pages texts', () => {
  render(<App />)
  const h1Element = screen.getByText(/Let's find your FAVORITE Pokemon!/i)
  expect(h1Element).toBeInTheDocument()
})

test('app renders pokedex page', () => {
  render(<Pokedex />)
  const pokedex = screen.getByText(/Pokedex/i)
  expect(pokedex).toBeInTheDocument()
})

test('app renders pokemonSearch page', () => {
  render(<PokemonSearch />)
  const pokedex = screen.getByText(/Find your Pokemon/i)
  expect(pokedex).toBeInTheDocument()
})

test('checks if the app navigates to other pages', () => {
  const history = createMemoryHistory()
  render(<Router history={history}><Navbar /></Router>)

  // navigates to pokedex page?
  userEvent.click(screen.getByText('Pokedex'))
  expect(history.location.pathname).toEqual('/pokedex')

  // navigates to search page?
  userEvent.click(screen.getByText('Search'))
  expect(history.location.pathname).toEqual('/pokemonSearch')
})