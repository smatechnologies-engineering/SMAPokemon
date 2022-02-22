import { mapResultsToPokedex } from './PokedexContextProvider'

describe('PokedexContextProvider', () => {
  describe('mapResultsToPokedex', () => {
    it('should return correct results', () => {
      expect(
        mapResultsToPokedex([
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
          { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        ])
      ).toMatchInlineSnapshot(`
        Object {
          "bulbasaur": Object {
            "name": "bulbasaur",
            "pokedexNumber": 1,
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
          },
          "ivysaur": Object {
            "name": "ivysaur",
            "pokedexNumber": 2,
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
          },
          "venusaur": Object {
            "name": "venusaur",
            "pokedexNumber": 3,
            "url": "https://pokeapi.co/api/v2/pokemon/3/",
          },
        }
      `)
    })
  })
})
