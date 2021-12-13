import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('it renders pokemon logo', () => {
  render(<App />)
  const imgElement = screen.getByAltText(/Logo/i);
  expect(imgElement).toBeInTheDocument();
})

test('it renders main pages texts', () => {
  render(<App />)
  const h1Element = screen.getByText(/Let's find your FAVORITE Pokemon!/i)
  expect(h1Element).toBeInTheDocument()
})
