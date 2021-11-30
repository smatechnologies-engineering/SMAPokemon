import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { PokemonHome } from './pages/PokemonHome'
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <MenuItem component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem component={Link} to="/search">
              Search
            </MenuItem>
            <MenuItem component={Link} to="/pokedex">
              Pokedex
            </MenuItem>
            <div className="Logo-Horizontally-Center">
              <img
                src={'./src/Pokemon-Logo-700x394.png'}
                className="Logo"
                alt="Logo"
              />
            </div>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <Switch>
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route exact path="/Search">
              <PokemonSearch />
            </Route>
            <Route exact path="/">
              <PokemonHome />
            </Route>
            <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
