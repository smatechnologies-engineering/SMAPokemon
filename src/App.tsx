import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Pokedex />
          </Route>
          <Route path="/search">
            <PokemonSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
