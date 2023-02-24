import axios from 'axios'
import { useQuery } from 'react-query'
import { NamedAPIResource, NamedAPIResourceList } from 'pokenode-ts'

export function useGetAllPokemon() {
  return useQuery<Array<NamedAPIResource>>(['all-pokemon'], async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const data: NamedAPIResourceList = response.data

    return data.results
  })
}
