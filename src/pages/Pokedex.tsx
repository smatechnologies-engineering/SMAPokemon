import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([])
  const [pokemonToDisplay, setPokemonToDisplay] = useState<Array<Pokemon>>([])
  const [hasMoreToDisplay, setHasMoreToDisplay] = useState(true)
  const [pageLength, setPageLength] = useState(20)

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemon(data.results)
      setPokemonToDisplay(data.results.slice(0, pageLength))
    })()
  }, [])
  const fetchMoreData = () => {
    const moreToDisplay = pokemonToDisplay.length + pageLength < pokemon.length
    setPokemonToDisplay(pokemon.slice(0, pokemonToDisplay.length + pageLength))
    setHasMoreToDisplay(moreToDisplay)
  }

  return (
    <InfiniteScroll
      dataLength={pokemonToDisplay.length} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={hasMoreToDisplay}
      loader={<h4>Searching for more pokemon</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>You have caught them all!</b>
        </p>
      }
    >
      <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokemonToDisplay.map((p) => (
            <Grid item xs={4} sm={4} md={4} key={p.name}>
              <PokemonInfoCard pokemon={p} />
              <br />
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  )
}
