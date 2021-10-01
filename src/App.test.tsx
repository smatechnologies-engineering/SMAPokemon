import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('it renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Find your Pokemon/i)
  expect(linkElement).toBeInTheDocument()
})
