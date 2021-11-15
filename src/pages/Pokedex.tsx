import { useState, useEffect, FC } from 'react'
import { Container, Grid } from '@mui/material'
import { PokemonGridItem } from '../components/PokemonGridItem'
import { NamedAPIResource } from 'pokenode-ts'
import InfiniteScroll from 'react-infinite-scroll-component'
import LinearProgress from '@mui/material/LinearProgress'

export const Pokedex: FC = () => {
  const [pokemonResourceList, setPokemonResourceList] = useState<
    Array<NamedAPIResource>
  >([])
  const [next, setNext] = useState<string | null>(null)

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemonResourceList(data.results)
      setNext(data.next)
    })()
  }, [])

  const fetchMoreData = async () => {
    const response = await fetch(String(next))
    const data = await response.json()
    setPokemonResourceList(pokemonResourceList.concat(data.results))
    setNext(data.next)
  }

  const maybeRenderPokemonCards = () => {
    return pokemonResourceList.length > 0
      ? pokemonResourceList.map((r: NamedAPIResource, i: number) => (
          <PokemonGridItem key={i} resource={r} />
        ))
      : null
  }

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <InfiniteScroll
        dataLength={pokemonResourceList.length}
        next={fetchMoreData}
        hasMore={!!next}
        loader={<LinearProgress />}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {maybeRenderPokemonCards()}
        </Grid>
      </InfiniteScroll>
    </Container>
  )
}
