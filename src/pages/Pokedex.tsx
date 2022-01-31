import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import '../styles/pages/PokeDex.css'
import Pagination from '@mui/material/Pagination'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([])
  const [page, setPage] = React.useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(6)

  const handleChange = (
    event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const noOfPages = Math.ceil(pokemon.length / itemsPerPage)

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemon(data.results)
    })()
  }, [])
  return (
    <div className="bgColor">
      <Container style={{ paddingBottom: 24, paddingTop: 100 }} maxWidth={'lg'}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokemon
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((p) => (
              <Grid item xs={4} sm={4} md={4} key={p.name}>
                <PokemonInfoCard pokemon={p} />
                <br />
              </Grid>
            ))}
        </Grid>
        <Pagination
          count={noOfPages}
          page={page}
          defaultPage={1}
          onChange={handleChange}
          color="primary"
        />
      </Container>
    </div>
  )
}
