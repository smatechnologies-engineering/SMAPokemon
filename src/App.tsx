import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route exact path="/">
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
