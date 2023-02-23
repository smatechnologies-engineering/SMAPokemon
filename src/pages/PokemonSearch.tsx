import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import PokemonNotFound from '../components/PokemonNotFound'
import { Pokemon } from 'pokenode-ts'
import { useQuery } from 'react-query'
import { useDebounce } from '../hooks/useDebounce'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const debouncedPokemonSearch = useDebounce(val.toLowerCase(), 300)
  const url = `https://pokeapi.co/api/v2/pokemon/${val.toLowerCase()}`

  const { data: pokemonData } = useQuery<Pokemon>(
    `pokemon-info-${debouncedPokemonSearch}`,
    async () => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
    {
      enabled: val !== '' && !!debouncedPokemonSearch,
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    if (pokemonData) {
      setPokemonFound(true)
    } else {
      setPokemonFound(false)
    }
  }, [pokemonData])

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

        {pokemonData && (
          <Grid item xs={4} sm={4} md={4}>
            <PokemonInfoCard name={pokemonData?.name ?? ''} url={url} />
          </Grid>
        )}
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
