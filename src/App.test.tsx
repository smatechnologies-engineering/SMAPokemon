import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Go To Search Page', () => {
  render(<App />)
  fireEvent.click(screen.getByText('Search'))

  const linkElement = screen.getByText(/Find your Pokemon/i)
  expect(linkElement).toBeInTheDocument()
})

//would mock out the api calls in real case
test('Search on search page', () => {
  render(<App />)
  fireEvent.click(screen.getByText('Search'))
  const input = screen.getByTestId('search-input')
  fireEvent.change(input, { target: { value: '12' } })
  fireEvent.click(screen.getByText('Submit'))

  const linkElement = screen.getByText('poison')
  expect(linkElement).toBeInTheDocument()
})
