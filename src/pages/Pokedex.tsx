import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([])

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemon(data.results)
    })()
  }, [])
  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemon.map((p) => (
          <Grid item xs={4} sm={4} md={4} key={p.name}>
            <PokemonInfoCard pokemon={p} />
            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
