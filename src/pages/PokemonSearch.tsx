import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'

export function PokemonSearch() {
  // interface PokemonSearchState {
  //   val: string | undefined
  //   pokemonFound: boolean
  //   pokemon: $FixMe
  //   enterValue: string
  // }

  const [val, setVal] = useState<string>('')
  const [pokemonFound, setPokemonFound] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<$FixMe>()
  const [error, setError] = useState<boolean>(false)

  const handleChange = (e: { target: { value: string } }) => {
    setVal(e.target.value.toLowerCase())
    setError(false)
  }

  const fetchPokemon = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const url = `https://pokeapi.co/api/v2/pokemon/${val}/`
    if (val) {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setPokemon(data)
        setPokemonFound(true)
      } catch (e) {
        console.error(e)
        setError(true)
        setPokemonFound(false)
      }
    }
  }

  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24, textAlign: 'center' }}
      maxWidth={'lg'}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h4">Find your Pokemon</Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <form onSubmit={fetchPokemon}>
            <TextField
              variant="filled"
              color="secondary"
              label="search pokemon"
              onChange={handleChange}
            />
          </form>
          <div
            className="pokemonInfoBox"
            style={{
              display: 'flex',
              justifyContent: 'center',
              border: '1px',
            }}
          >
            {pokemonFound ? (
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '32px ',
                }}
                item
                xs={4}
                sm={4}
                md={4}
              >
                <PokemonInfoCard
                  pokemon={{
                    name: pokemon.name,
                    url: `https://pokeapi.co/api/v2/pokemon/${val}/`,
                  }}
                />
              </Grid>
            ) : error ? (
              <p>Could not find pokemon</p>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
