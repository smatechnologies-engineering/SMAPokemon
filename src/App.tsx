import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/pokemon-search">
          <PokemonSearch />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon/:pokemon">{/* <PokemonCard /> */}</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
