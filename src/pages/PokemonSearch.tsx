import { useEffect, useState, ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { PageContainer } from '../components/PageContainer'

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const [pokemon, setPokemon] = useState()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${val}`

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)
        const data = await response.json()
        setPokemon(data)
        setPokemonFound(true)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [val])

  return (
    <PageContainer dataQA="search-page" sx={{ textAlign: 'center' }}>
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h2">Find your Pokemon</Typography>
        </Grid>

        {pokemonFound ? (
          <Grid item xs={4} sm={4} md={4}>
            <PokemonInfoCard pokemon={{ name: val, url }} />
          </Grid>
        ) : null}
        <Grid item xs={4} sm={4} md={4}>
          <TextField
            data-qa="search-input"
            variant="outlined"
            color="secondary"
            label="search pokemon"
            onChange={handleChange}
          >
            {val}
          </TextField>
        </Grid>
      </Grid>
    </PageContainer>
  )
}
