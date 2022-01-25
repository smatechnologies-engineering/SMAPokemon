import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import logo from '../assets/pokemon-logo.png'

const Nav = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="pokemon-logo" height="150px" width="300px" />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flexEnd',
            fontWeight: 'bold',
          }}
        >
          <Button
            id="pokedex-link"
            component={Link}
            to={'/'}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              fontWeight: 700,
              fontSize: '1.2rem',
            }}
          >
            Pokedex
          </Button>
          <Button
            id="search-link"
            component={Link}
            to={'/search'}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              fontWeight: 700,
              fontSize: '1.2rem',
            }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </AppBar>
  )
}
export default Nav
