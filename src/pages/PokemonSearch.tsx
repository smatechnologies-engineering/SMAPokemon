import { useEffect, useState, useMemo } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import Pokeball from '../components/Pokeball'
import debounce from 'lodash.debounce'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const debounceSearch = useMemo(() => debounce(handleChange, 500), [])
  const url = `https://pokeapi.co/api/v2/pokemon/${val}/`

  useEffect(() => {
    ;(async () => {
      setPokemon(null)
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${val}/`
        )
        const data = await response.json()
        setPokemon(data)
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
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={{ xs: 4 }}
        columns={{ xs: 4 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            variant="outlined"
            color="secondary"
            label="search pokemon"
            onChange={debounceSearch}
          />
          {pokemon ? (
            <Grid item xs={4} sm={4} md={4} sx={{ my: 4 }}>
              <PokemonInfoCard pokemon={{ name: val, url }} />
            </Grid>
          ) : (
            <Pokeball />
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
