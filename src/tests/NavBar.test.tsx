import {
    render,
    fireEvent,
  } from '@testing-library/react'
  import { NavBar } from '../components/NavBar'
  
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }))
  
  describe('NavBar', () => {
    it('should render the NavBar menu', () => {
      const { getByTestId } = render(<NavBar />)
      const menuButton = getByTestId('app-bar')
      expect(menuButton).toBeInTheDocument()
    })
  
    it('should open the NavBar menu when the menu button is clicked', () => {
      const result = render(<NavBar />)
      const menuButton = result.getByLabelText('menu icon')
      fireEvent.click(menuButton)
      const menu = result.getByTestId('toggle-menu')
      expect(menu).toBeInTheDocument()
    })
  
    it('should navigate to the correct page when a menu item is clicked', () => {
      const { getByTestId } = render(<NavBar />)
      const homeLink = getByTestId('Home')
      fireEvent.click(homeLink)
      const url = window.location.href
      expect(url).toEqual(window.location.origin + '/')
    })
  })
  