import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import { PokeFaces, Nullable } from '../global'
import { CircularProgress } from '@mui/material'
import { LoadingPokemon } from '../components/Pokemon'

export function Pokedex() {
  const [pokeInfo, setPokeInfo] = useState<Array<PokeFaces.Pokemon>>([])
  const [loading, setLoading] = useState(false)
  const [triviaPokemon, setTriviaPokemon] =
    useState<Nullable<PokeFaces.Pokemon>>(null)

  // Get list of all pokemon
  const getPokemon = async () => {
    setLoading(true)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    const detailedInfo: PokeFaces.Pokemon[] = []
    // gather detailed info on each pokemon to pass to the info card
    for (const poke in data.results) {
      const specificPokemon = data.results[poke]
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${specificPokemon.name}`
      )
      const data2 = await res.json()
      detailedInfo.push(data2)
    }
    setPokeInfo(detailedInfo)
    setLoading(false)
  }
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const getRandomPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber(1, 153)}`
    )
    const randomPoke = await res.json()
    setTriviaPokemon(randomPoke)
  }
  useEffect(() => {
    getRandomPokemon()
  }, [])

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      {loading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LoadingPokemon pokemon={triviaPokemon} />
          <CircularProgress />
        </div>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokeInfo.map((p) => (
            <Grid item xs={4} sm={4} md={4} key={p.species?.name}>
              <PokemonInfoCard pokemon={p} />
              <br />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
