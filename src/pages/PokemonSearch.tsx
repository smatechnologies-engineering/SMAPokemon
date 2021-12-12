import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/Card/PokemonInfoCard'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const [pokemon, setPokemon] = useState()
  const handleChange = (e: $FixMe) => {
    setVal(e.target.value)
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${val}/`

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${val}/`
        )
        const data = await response.json()
        console.log(data)
        setPokemon(data)
        setPokemonFound(true)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [val])

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>

        {pokemonFound ? (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <PokemonInfoCard pokemon={{ name: val, url }} />
          </Grid>
        ) : null}
        <Grid item xs={4} sm={4} md={4} mb={35}>
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
