import axios from 'axios'
import { useQuery } from 'react-query'
import { Pokemon } from 'pokenode-ts'

export function useGetPokemon(pokemon: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
  return useQuery<Pokemon, Error>(
    ['pokemon-info', pokemon],
    async () => {
      const response = await axios.get(url)
      const data = response.data
      return data
    },
    {
      enabled: pokemon !== '' && !!pokemon,
    }
  )
}
