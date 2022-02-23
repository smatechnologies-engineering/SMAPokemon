import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { PageContainer } from '../components/PageContainer'
import { Search } from '../components/Search'

export function PokemonSearch() {
  return (
    <PageContainer dataQA="search-page" sx={{ textAlign: 'center' }}>
      <Grid container spacing={{ xs: 4 }} columns={12}>
        <Grid item xs={12} component={Typography} variant="h2">
          Find your Pokémon
        </Grid>
        <Search />
      </Grid>
    </PageContainer>
  )
}
