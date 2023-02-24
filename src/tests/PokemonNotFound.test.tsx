import { render, screen, fireEvent } from '@testing-library/react'
import { PokemonSearch } from '../pages/PokemonSearch'

jest.mock('../hooks/useGetPokemon', () => ({
  useGetPokemon: () => {
    return { data: undefined }
  },
}))

describe('Pokemon Not Found', () => {
  test('it displays not found card', () => {
    render(<PokemonSearch />)

    const input = screen.getByLabelText('pokemon-search')
    fireEvent.change(input, { target: { value: 'p' } })

    expect(input).toHaveValue('p')

    expect(screen.getByLabelText('pokemon-not-found')).toBeInTheDocument()
  })
})
