import { render, screen } from '@testing-library/react'
import { Pokedex } from '../pages/Pokedex'
import { pikachu, pikachuFlavorText } from '../test-utils/mockPikachu'
import { allPokemon } from '../test-utils/mockAllPokemon'

const mockAllPokemon = { data: allPokemon.results }
jest.mock('../hooks/useGetAllPokemon', () => ({
  useGetAllPokemon: () => {
    return mockAllPokemon
  },
}))

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

describe('Pokedex', () => {
  test('it renders all one hundred pokemon on the page', async () => {
    render(<Pokedex />)

    const allInfoCards = screen.getAllByLabelText('pokemon-info-card')

    expect(allInfoCards).toHaveLength(100)
  })
})
