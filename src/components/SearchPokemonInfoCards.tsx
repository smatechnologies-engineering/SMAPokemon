import Grid from '@mui/material/Grid'
import { usePokedex } from './PokedexContextProvider'
import { PokemonInfoCard } from './PokemonInfoCard'

interface SearchPokemonInfoCardsProps {
  pokemonNames: Array<string>
}

export function SearchPokemonInfoCards({
  pokemonNames,
}: SearchPokemonInfoCardsProps) {
  const pokedex = usePokedex()

  return pokemonNames.length > 0 ? (
    <>
      {pokemonNames.map((name) => (
        <Grid key={name} item xs={12} sm={6} md={4} lg={3}>
          <PokemonInfoCard pokemon={{ name, url: pokedex[name].url }} />
        </Grid>
      ))}
    </>
  ) : null
}
