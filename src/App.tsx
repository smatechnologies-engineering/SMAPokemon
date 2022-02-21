import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route exact path="/search">
            <PokemonSearch />
          </Route>
          <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
