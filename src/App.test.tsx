import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Nav from './components/Nav'

test('route to search page / pokedex', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Nav />
    </Router>
  )
  userEvent.click(screen.getByText('Search'))
  expect(history.location.pathname).toEqual('/search')

  userEvent.click(screen.getByText('Pokedex'))
  expect(history.location.pathname).toEqual('/')
})
