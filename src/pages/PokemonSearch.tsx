import { useCallback, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import debounce from 'lodash.debounce'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const [pokemon, setPokemon] = useState()
  const handleChange = (e: any) => {
    setVal(e.target.value)
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${val}/`

  const debouncedHandleChange = useCallback(
    debounce(handleChange, 300)
  , []);

  useEffect(() => {
    ;(async () => {
      try {
        if (!val) {
          setPokemonFound(false);
          return;
        }
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${val}/`
        )
        const data = await response.json()
        setPokemon(data)
        setPokemonFound(true)
      } catch (e) {
        setPokemonFound(false)
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
        <Grid item xs={12} sm={12} md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" component={RouterLink} to="/">Home</Link>
            <Typography color="text.primary">Pokemon Search</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h3">Find your Pokemon</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            variant="outlined"
            color="secondary"
            label="search pokemon"
            onChange={debouncedHandleChange}
          />
        </Grid>
        {pokemonFound ? (
          <Grid item xs={4} sm={4} md={4}>
            <PokemonInfoCard pokemon={{ name: val, url }} />
          </Grid>
        ) : val ? <Grid item xs={4} sm={4} md={4}><Typography>No results found</Typography></Grid> : null}
      </Grid>
    </Container>
  )
}
