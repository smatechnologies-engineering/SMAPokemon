import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { useGetAllPokemon } from '../hooks/useGetAllPokemon'

export function Pokedex() {
  const { data: pokemon } = useGetAllPokemon()

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemon?.map((p) => (
          <Grid item xs={4} sm={4} md={4} key={p.name}>
            <PokemonInfoCard name={p.name} />
            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
