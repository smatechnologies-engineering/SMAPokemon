import { render, screen } from '@testing-library/react'
import App from '../App'
import { PokemonSearch } from '../pages/PokemonSearch'
import { pikachu } from '../test-utils/mockPikachu'

const mockPokemon = { data: pikachu }
jest.mock('../hooks/useGetPokemon', () => ({
  useGetPokemon: () => {
    return mockPokemon
  },
}))

const mockFlavorText =
  'When several of these POKéMON gather, their electricity could build and cause lightning storms.'

jest.mock('../hooks/useGetFlavorText', () => ({
  useGetFlavorText: () => {
    return mockFlavorText
  },
}))

describe('Pokemon Search', () => {
  test('it renders "Find your Pokemon Search"', () => {
    render(<App />)
    const linkElement = screen.getByText(/Find your Pokemon/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('it renders pikachu info card', () => {
    render(<PokemonSearch />)

    expect(screen.getByLabelText('pokemon-info-card')).toBeInTheDocument()

    const cardName = screen.getByLabelText('pokemon-info-card-name')

    expect(cardName).toHaveTextContent('Pikachu')
  })
})
