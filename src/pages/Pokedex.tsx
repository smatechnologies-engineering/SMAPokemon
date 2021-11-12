import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import Pagination from '@mui/material/Pagination'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface Pokemon {
  name: string
  url: string
}

export function Pokedex() {
  const itemsPerPage = 9;
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([])
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleChange = (event: any, value: number) => {
    setPage(value);
    getData(value);
  };

  const getData = async (page: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${itemsPerPage * (page - 1)}&limit=${itemsPerPage}`
    )
    const data = await response.json()
    setPokemon(data.results)
    setPageCount(Math.ceil(data.count / itemsPerPage))
  };

  useEffect(() => {
    getData(1)
  }, [])
  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" component={RouterLink} to="/">Home</Link>
            <Typography color="text.primary">Pokedex</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
          <Typography variant="h3">Pokedex</Typography>
        </Grid>
        {pokemon.map((p) => (
          <Grid item xs={4} sm={4} md={4} key={p.name}>
            <PokemonInfoCard pokemon={p} />
            <br />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        size="large"
        style={{display:'flex',justifyContent:'center',alignItems:'center'}}
      />
    </Container>
  )
}
