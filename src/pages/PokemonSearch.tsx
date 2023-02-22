import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import PokemonNotFound from '../components/PokemonNotFound'
import { Pokemon } from 'pokenode-ts'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    const getPokemon = setTimeout(async () => {
      const formattedVal = val.toLowerCase()
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${formattedVal}/`
        )
        const data = await response.json()
        setPokemonData(data)
        setPokemonFound(true)
      } catch (e) {
        setPokemonFound(false)
        console.error('Error fetching pokemon', e)
      }
    }, 200)

    return () => clearTimeout(getPokemon)
  }, [val])

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <Grid
        container
        spacing={{ xs: 4 }}
        columns={{ xs: 4 }}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>

        {pokemonFound ? (
          <Grid item xs={4} sm={4} md={4}>
            <PokemonInfoCard
              name={pokemonData.name}
              url={POKE_API_URL + val.toLowerCase()}
            />
          </Grid>
        ) : null}
        {!pokemonFound && val !== '' && <PokemonNotFound />}
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            variant="outlined"
            color="secondary"
            label="Search pokemon"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
