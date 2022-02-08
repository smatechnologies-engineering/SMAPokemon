import { useState, useEffect, useCallback } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import Popup from 'reactjs-popup'
import PokeLoading from '../components/PokeLoading'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])
  const getPokemon = useCallback(async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=809'
      )
      const data = await response.json()
      setPokemons(data.results)
      // console.log({ pokemons })
    } catch (e) {
      console.log(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  const pokemonInfo = pokemons.map((p) => (
    <Grid
      style={{ display: 'flex', justifyContent: 'center' }}
      item
      xs={4}
      sm={4}
      md={4}
      key={p.name}
    >
      <Popup
        trigger={
          <button className="button">
            {p.name[0].toUpperCase() + p.name.slice(1)}
          </button>
        }
      >
        {(close) => (
          <div>
            <button className="close" onClick={close}>
              Close
            </button>
            <PokemonInfoCard pokemon={p} />
          </div>
        )}
      </Popup>

      <br />
    </Grid>
  ))

  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemons.length > 0 ? pokemonInfo : <PokeLoading />}
      </Grid>
    </Container>
  )
}
