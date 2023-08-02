import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { useGetAllPokemon } from '../hooks/useGetAllPokemon'

const INFINITE_SCROLL_EDGE_HEIGHT = 30

export function Pokedex() {
  const {
    data: pokemonData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetAllPokemon('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      if (
        scrollTop + clientHeight + INFINITE_SCROLL_EDGE_HEIGHT >=
          scrollHeight &&
        hasNextPage
      ) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [fetchNextPage, hasNextPage])

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'} data-testid="pokedex-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        {pokemonData?.pages.map((page) =>
          page.results.map((p) => (
            <Grid item xs={4} sm={4} md={4} key={p.name}>
              <PokemonInfoCard name={p.name} sx={{ height: '100%' }} />
              <br />
            </Grid>
          ))
        )}
        {isLoading && (
          <Grid item xs={4} sm={8} md={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
