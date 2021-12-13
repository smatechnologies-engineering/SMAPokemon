import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('it renders learn react link', () => {
  render(<App />)
  const h1Element = screen.getByText(/hi/i)
  expect(h1Element).toBeInTheDocument()
})
