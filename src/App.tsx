import React from 'react'
import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import Main from './pages/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './components/Logo/Pokemon-Logo.png'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="logo" />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route exact path="/pokemonSearch">
              <PokemonSearch />
            </Route>
            <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
