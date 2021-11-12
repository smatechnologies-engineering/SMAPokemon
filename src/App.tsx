import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Router, Route, Link as RouterLink, Switch } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Link from '@mui/material/Link'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ minWidth: 100, textAlign: 'left' }}>
              <Link component={RouterLink} to="/">
                <img src="/src/Pokemon-Logo-700x394.png" alt="Pokemon" height="50" />
              </Link>
            </Typography>
            <Typography sx={{ minWidth: 150 }}>
              <Link underline="hover" color="inherit" component={RouterLink} to="/search">Pokemon Search</Link>
            </Typography>
            <Typography sx={{ minWidth: 100 }}>
              <Link underline="hover" color="inherit" component={RouterLink} to="/pokedex">Pokedex</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <Switch>
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route exact path="/search">
              <PokemonSearch />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
