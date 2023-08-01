import { Pokemon } from 'pokenode-ts';
import { useQuery } from 'react-query';

export function useGetFlavorText(pokemon: Pokemon | undefined) {
  const url = pokemon?.species?.url ?? ''; // Add an additional check for species
  const pokemonName = pokemon?.name ?? '';

  return useQuery<string>(
    ['flavor-text', pokemonName],
    async () => {
      if (url) {
        const response = await fetch(url);
        const data = await response.json();
        const flavorTextEntries = data.flavor_text_entries;
        const englishFlavorText = flavorTextEntries.find(
          (entry: { language: { name: string } }) => entry.language.name === 'en'
        );

        return englishFlavorText?.flavor_text ?? '';
      } else {
        return '';
      }
    },
    {
      enabled: Boolean(pokemon),
    }
  );
}