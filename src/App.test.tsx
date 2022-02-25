import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe.skip('App', () => {
  test('it renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Find your Pokemon/i)
    expect(linkElement).toBeInTheDocument()
  })
})
