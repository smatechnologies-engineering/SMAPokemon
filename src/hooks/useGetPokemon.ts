import { useQuery } from 'react-query'
import type { Pokemon } from 'pokenode-ts'

export function useGetPokemon(pokemonName: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`

  return useQuery<Pokemon>(
    ['pokemon-info', pokemonName],
    async ({ signal }) => {
      const data = await fetch(url, { signal }).then(
        (res) => res.json() as Promise<Pokemon>
      )
      return data
    },
    {
      enabled: !!pokemonName,
    }
  )
}
