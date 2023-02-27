import { render, screen } from '@testing-library/react'
import { Pokedex } from '../pages/Pokedex'
import { pikachu, pikachuFlavorText } from '../test-utils/mockPikachu'
import { firstOneHundredPokemon } from '../test-utils/firstOneHundredPokemon'

const mockfirstOneHundredPokemon = {
  data: { pages: [firstOneHundredPokemon] },
  fetchNextPage: () => {
    return {
      data: {
        pages: [firstOneHundredPokemon],
      },
    }
  },
}

jest.mock('../hooks/useGetAllPokemon', () => ({
  useGetAllPokemon: () => {
    return mockfirstOneHundredPokemon
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
  test('it renders first one hundred pokemon on initial load', () => {
    render(<Pokedex />)

    const allInfoCards = screen.getAllByLabelText('pokemon-info-card')

    expect(allInfoCards).toHaveLength(100)
  })
})
