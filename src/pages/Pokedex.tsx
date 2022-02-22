import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { PageContainer } from '../components/PageContainer'
import { usePokedex } from '../components/PokedexContextProvider'

export function Pokedex() {
  const pokedex = usePokedex()

  return (
    <PageContainer dataQA={'pokedex-page'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(pokedex).map((name) => (
          <Grid item xs={4} sm={4} md={4} key={name}>
            <PokemonInfoCard pokemon={pokedex[name]} />
            <br />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  )
}
