import { FormEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import Pokeball from '../components/Pokeball'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export function PokemonSearch() {
  const [val, setVal] = useState<string>('')
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(null)
    setError(false)
    setVal(e.target.value)
  }

  const handleSub = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (val) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${val}/`
        )
        const data = await response.json()
        setPokemon(data)
      } catch (e) {
        setError(true)
      }
    }
  }

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <form onSubmit={handleSub}>
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
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                variant="outlined"
                color="secondary"
                label="search pokemon"
                onChange={handleChange}
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Box>
            {pokemon ? (
              <Grid item xs={4} sm={4} md={4} sx={{ my: 4 }}>
                <PokemonInfoCard
                  pokemon={{
                    name: val,
                    url: `https://pokeapi.co/api/v2/pokemon/${val}/`,
                  }}
                />
              </Grid>
            ) : (
              <Pokeball />
            )}
            <Grid item xs={4} sm={4} md={4}>
              {error && (
                <Alert severity="error">Error! Pokemon may not exist</Alert>
              )}
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

