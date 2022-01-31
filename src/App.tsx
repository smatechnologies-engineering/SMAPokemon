import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonCard } from './components/Pokemon'
import { HomePage } from './pages/HomePage'
import { PokeNav } from './components/PokeNav'

function App() {
  return (
    <BrowserRouter>
      <PokeNav />
      <Switch>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/poke-search">
          <PokemonSearch />
        </Route>
        <Route path="/info/:pokemon">
          <PokemonCard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
