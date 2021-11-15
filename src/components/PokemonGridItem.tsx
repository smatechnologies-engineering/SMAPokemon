import { FC, useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { NamedAPIResource, Pokemon } from 'pokenode-ts'

interface IProps {
  resource: NamedAPIResource
}

export const PokemonGridItem: FC<IProps> = ({ resource }) => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch(resource?.url)
      const pokemon = await response.json()
      if (pokemon) setPokemon(pokemon)
    })()
  }, [resource])

  return pokemon?.species ? (
    <Grid item xs={4} sm={4} md={4}>
      <PokemonInfoCard pokemon={pokemon} />
      <br />
    </Grid>
  ) : null
}
