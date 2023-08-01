import { useInfiniteQuery } from 'react-query'
import type { NamedAPIResourceList } from 'pokenode-ts'

export function useGetAllPokemon(url: string) {
  return useInfiniteQuery<NamedAPIResourceList>(
    'all-pokemon',
    async ({ pageParam = url, signal }) => {
      const data = await fetch(pageParam, { signal }).then(
        (res) => res.json() as Promise<NamedAPIResourceList>
      )

      return data
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next
      },
    }
  )
}
