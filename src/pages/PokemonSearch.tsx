import { FC, useState } from 'react'
import { Typography, Grid, Container, Box } from '@mui/material'
import { PokemonCard } from '../components/Pokemon'
import { PokemonSearchTextField } from '../components/PokemonSearchTextField'
import { Pokemon as PokemonType } from 'pokenode-ts'

export const PokemonSearch: FC = () => {
  const [pokemon, setPokemon] = useState<PokemonType | undefined>(undefined)
  const [isPokemonFound, setIsPokemonFound] = useState<boolean>(true)

  const maybeRenderPokemonInfoCard = () => {
    return isPokemonFound ? (
      <PokemonCard pokemon={pokemon} />
    ) : (
      <Typography variant="h5">Pokemon Not Found</Typography>
    )
  }

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>
        <PokemonSearchTextField
          debounceInterval={700}
          setPokemon={setPokemon}
          setIsPokemonFound={setIsPokemonFound}
        />
        <Grid item xs={4} sm={4} md={4}>
          <Box display="flex" justifyContent="center">
            {maybeRenderPokemonInfoCard()}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
