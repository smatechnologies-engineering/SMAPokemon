import './App.css'
import { Header } from './components/Header'
import { PokemonSearch } from './pages/PokemonSearch'
import { PokemonCard } from './components/Pokemon'
import { HomePage } from './pages/HomePage'
import { Pokedex } from './pages/Pokedex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <PokemonSearch />
          </Route>
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
          <Route exact path="/:pokemon">
            <PokemonCard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
