import { Box, Button, Container, Grid } from '@mui/material'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { useGetAllPokemon } from '../hooks/useGetAllPokemon'

export function Pokedex() {
  const { data: pokemonData, fetchNextPage } = useGetAllPokemon()

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemonData?.pages.map((page) =>
          page.results.map((p) => (
            <Grid item xs={4} sm={4} md={4} key={p.name}>
              <PokemonInfoCard name={p.name} />
              <br />
            </Grid>
          ))
        )}
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => fetchNextPage()}
          aria-label="load-more-pokemon"
        >
          Load More
        </Button>
      </Box>
    </Container>
  )
}
