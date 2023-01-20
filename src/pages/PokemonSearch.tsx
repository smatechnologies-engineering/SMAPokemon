import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'

export function PokemonSearch() {
  const [val, setVal] = useState('')

  const handleChange = (e: $FixMe) => {
    setVal(e.target.value)
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${val}/`

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <PokemonInfoCard pokemon={{ name: val, url }} />
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <TextField
            variant="outlined"
            color="secondary"
            label="search pokemon"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
