import { render, screen } from '@testing-library/react'
import App from '../App'
import { PokemonSearch } from '../pages/PokemonSearch'
import { pikachu, pikachuFlavorText } from '../test-utils/mockPikachu'

const mockPokemon = { data: pikachu }
jest.mock('../hooks/useGetPokemon', () => ({
  useGetPokemon: () => {
    return mockPokemon
  },
}))

jest.mock('../hooks/useGetFlavorText', () => ({
  useGetFlavorText: () => {
    return pikachuFlavorText
  },
}))

describe('Pokemon Search', () => {
  test('it renders "Find your Pokemon"', () => {
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
