import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import { response } from 'msw'
import logo from './Pokemon-Logo-700x394.png'

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(
            'https://wallpapercave.com/wp/RBpf6Dr.jpg'
          )`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          width: '100vw',
          height: '100vh',
          overflow: 'scroll',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: '25px',
          alignItems: 'center',
        }}
        className="App"
      >
        <img
          src={logo}
          className="pokemonImage"
          alt="pokemon logo"
          style={{
            maxWidth: '30%',
          }}
        />
        <header
          className="App-header"
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-start',
          }}
        >
          <Nav />
          <div style={{}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/pokedex">
                <Pokedex />
              </Route>
              <Route path="/search">
                <PokemonSearch />
              </Route>
              <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
            </Switch>
          </div>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
