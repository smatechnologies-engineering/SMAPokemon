import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search, checkArrayEquality } from './Search'
import { PokedexContext } from './PokedexContextProvider'

jest.mock('./SearchPokemonInfoCards', () => {
  return {
    SearchPokemonInfoCards: jest.fn(() => (
      <div>Mocked SearchPokemonInfoCards</div>
    )),
  }
})

const PokedexProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PokedexContext.Provider
      value={{
        bulbasaur: { name: 'bulbasaur', url: 'hey', pokedexNumber: 1 },
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

describe('Search', () => {
  describe('Search component', () => {
    it('should render "Enter the name" text when nothing is in search input', () => {
      render(
        <PokedexProvider>
          <Search />
        </PokedexProvider>
      )
      expect(
        screen.getByText('Enter the name of the Pokémon in the search box.')
      ).toBeInTheDocument()
    })
    it('should render "No results found." when no pokemon match the search text', () => {
      render(
        <PokedexProvider>
          <Search />
        </PokedexProvider>
      )
      expect(
        screen.getByText('Enter the name of the Pokémon in the search box.')
      ).toBeInTheDocument()
      userEvent.type(screen.getByRole('textbox'), 'abcd')
      expect(screen.getByText('No results found.')).toBeInTheDocument()
    })
    // TODO: work on fixing this unit test
    it.skip('should render pokemon info cards when the search text matches some pokemon', async () => {
      render(
        <PokedexProvider>
          <Search />
        </PokedexProvider>
      )
      expect(
        await screen.findByText(
          'Enter the name of the Pokémon in the search box.'
        )
      ).toBeInTheDocument()
      userEvent.type(screen.getByRole('textbox'), 'bulbasaur')
      expect(
        await screen.findByText('Mocked SearchPokemonInfoCards')
      ).toBeInTheDocument()
    })
  })
  describe('checkArrayEquality', () => {
    it('should return true when given null for both arrays', () => {
      expect(checkArrayEquality(null, null)).toBe(true)
    })
    it('should return true when given 2 empty arrays', () => {
      expect(checkArrayEquality([], [])).toBe(true)
    })
    it('should return true when given 2 arrays with a length of 1 and the same element', () => {
      expect(checkArrayEquality(['a'], ['a'])).toBe(true)
    })
    it('should return true when given 2 arrays with the same elements in the same order', () => {
      expect(checkArrayEquality(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true)
    })
    it('should return false when given null for first array', () => {
      expect(checkArrayEquality(null, ['a'])).toBe(false)
    })
    it('should return false when given null for second array', () => {
      expect(checkArrayEquality(['a'], null)).toBe(false)
    })
    it('should return false when given 2 arrays with a length of 1 but different elements', () => {
      expect(checkArrayEquality(['a'], ['b'])).toBe(false)
    })
    it('should return false when given 2 arrays with different lengths', () => {
      expect(checkArrayEquality(['a', 'b'], ['a', 'b', 'c'])).toBe(false)
    })
    it('should return false when given 2 arrays with same elements but in different order', () => {
      expect(checkArrayEquality(['a', 'b'], ['b', 'a'])).toBe(false)
    })
  })
})
