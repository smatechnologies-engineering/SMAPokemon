import { render, screen } from '@testing-library/react'
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from './App'

test('app renders pokemon logo', () => {
  render(<App />)
  const imgElement = screen.getByAltText(/Logo/i);
  expect(imgElement).toBeInTheDocument();
})

test('app renders main pages texts', () => {
  render(<App />)
  const h1Element = screen.getByText(/Let's find your FAVORITE Pokemon!/i)
  expect(h1Element).toBeInTheDocument()
})

test('app renders pokedex page', () => {
  render(<BrowserRouter><App/></BrowserRouter>);

  userEvent.click(screen.getByText(/pokedex/));

  expect(screen.getByText(/pokedex/i)).toBeInTheDocument();
});