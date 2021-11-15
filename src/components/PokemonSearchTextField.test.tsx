import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import { PokemonSearchTextField } from './PokemonSearchTextField'
import { MemoryRouter } from 'react-router'
import { server, rest } from '../backend/server'
import * as Logger from '../shared/utils/Logger'
import * as clefairy from '../backend/mocks/clefairy.json'

describe('<PokemonSearchTextField />', () => {
  afterEach(() => {
    cleanup()
  })

  it('set isPokemonFound to true when a searched for pokemon is found', async () => {
    // arrange
    server.use(
      rest.get('https://pokeapi.co/api/v2/pokemon/35', (req, res, ctx) => {
        return res(ctx.json(clefairy))
      })
    )
    const setPokemonMock = jest.fn()
    const setIsPokemonFoundMock = jest.fn()

    render(
      <MemoryRouter>
        <PokemonSearchTextField
          debounceInterval={0}
          setPokemon={setPokemonMock}
          setIsPokemonFound={setIsPokemonFoundMock}
        />
      </MemoryRouter>
    )
    const searchInput = screen.getByLabelText('search pokemon')

    // act
    fireEvent.change(searchInput, { target: { value: '35' } })

    // assert
    await waitFor(() =>
      expect(setIsPokemonFoundMock).toHaveBeenCalledWith(true)
    )
    expect(setIsPokemonFoundMock).toHaveBeenCalledTimes(1)
    expect(setPokemonMock).toHaveBeenLastCalledWith(clefairy)
    expect(setPokemonMock).toHaveBeenCalledTimes(1)
  })

  it('set isPokemonFound to false when a searched for pokemon is not found', async () => {
    // arrange
    const setPokemonMock = jest.fn()
    const setIsPokemonFoundMock = jest.fn()
    const errorMock = jest.fn()
    jest.spyOn(Logger, 'error').mockImplementation(errorMock)
    render(
      <MemoryRouter>
        <PokemonSearchTextField
          debounceInterval={0}
          setPokemon={setPokemonMock}
          setIsPokemonFound={setIsPokemonFoundMock}
        />
      </MemoryRouter>
    )
    const searchInput = screen.getByLabelText('search pokemon')

    // act
    fireEvent.change(searchInput, { target: { value: '999' } })

    // assert
    await waitFor(() =>
      expect(setIsPokemonFoundMock).toHaveBeenCalledWith(false)
    )
    expect(setIsPokemonFoundMock).toHaveBeenCalledTimes(1)
    expect(setPokemonMock).not.toHaveBeenCalled()
    expect(errorMock).toHaveBeenCalledTimes(1)
  })
})
