import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { Grid, Box, LinearProgress } from '@mui/material'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([])
  const [nextApiCall, setNextApiCall] = useState<string>('')

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemon(data.results)
      setNextApiCall(data.next)
    })()
  }, [])

  const fetchMoreData = async () => {
    const response = await fetch(nextApiCall)
    const data = await response.json()
    setNextApiCall(data.next)
    setPokemon((pokemon) => [...pokemon, ...data.results])
  }

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          <Box sx={{ width: '100%', my: 2 }}>
            <LinearProgress />
          </Box>
        }
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokemon.map((p) => (
            <Grid item xs={4} sm={4} md={4} key={p.name}>
              <PokemonInfoCard pokemon={p} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  )
}
