import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { NamedAPIResourceList } from 'pokenode-ts'

export function useGetAllPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  return useInfiniteQuery<NamedAPIResourceList>(
    ['all-pokemon'],
    async ({ pageParam = url }) => {
      const response = await axios.get(pageParam)
      const data: NamedAPIResourceList = response.data

      return data
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next
      },
    }
  )
}
