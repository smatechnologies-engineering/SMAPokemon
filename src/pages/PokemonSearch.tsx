import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { Button } from '@mui/material'

export function PokemonSearch() {
  const [val, setVal] = useState<string>('')
  const [pokemon, setPokemon] = useState(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const fetchPokemon = async (value: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      const data = await response.json()
      data.length == 0 ? setPokemon(null) : setPokemon(data)
    } catch (e) {
      //would add better error handling to the app after talking with team
      console.error(e)
    }
  }

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'md'}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography id="findPokemonHeader" variant="h4">
            Find your Pokemon
          </Typography>
        </Grid>

        {pokemon && (
          <Grid style={{ margin: 'auto' }} item xs={4} sm={4} md={4}>
            <PokemonInfoCard pokemon={pokemon} />
          </Grid>
        )}
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            id="searchInput"
            variant="outlined"
            color="secondary"
            label="search pokemon"
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                fetchPokemon(val.toLowerCase())
              }
            }}
          />
        </Grid>
        {pokemon && (
          <Grid item xs={4} sm={4} md={4}>
            <Button
              id="clearBtn"
              style={{ backgroundColor: '#ee1515', color: '#f0f0f0' }}
              onClick={() => {
                setPokemon(null)
              }}
            >
              New Search
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
