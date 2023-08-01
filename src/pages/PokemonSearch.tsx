import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import PokemonNotFound from '../components/PokemonNotFound'
import { useDebounce } from '../hooks/useDebounce'
import { useGetPokemon } from '../hooks/useGetPokemon'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const debouncedSearchStr = useDebounce(val.toLowerCase(), 200)

  const { data: pokemonData } = useGetPokemon(debouncedSearchStr)

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
            <PokemonInfoCard name={pokemonData?.name ?? ''} />
          </Grid>
        )}
        {!pokemonFound && val !== '' && <PokemonNotFound />}
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            variant="outlined"
            color="secondary"
            label="Search pokemon"
            data-testid="pokemon-search"
            aria-labelledby="pokemon-search-label"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
