import { render, screen } from '@testing-library/react'
import { HomePage } from './HomePage'

describe('<HomePage />', () => {
  it('displays the HomePage text', () => {
    // arrange, act
    render(<HomePage />)
    const homePageElement = screen.getByText(/Home Page/i)

    // assert
    expect(homePageElement).toBeInTheDocument()
  })
})
