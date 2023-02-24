import axios from 'axios'
import { useQuery } from 'react-query'
import { Pokemon, FlavorText } from 'pokenode-ts'

export function useGetFlavorText(pokemon: Pokemon | undefined) {
  return useQuery<string>(
    ['flavor-test', pokemon?.name],
    async () => {
      const response = await axios.get(pokemon?.species?.url as string)
      const data = await response.data

      const flavorText: FlavorText = data.flavor_text_entries.find(
        (t: FlavorText) => t.language.name === 'en'
      )

      return flavorText.flavor_text
    },
    {
      enabled: !!pokemon,
    }
  )
}
