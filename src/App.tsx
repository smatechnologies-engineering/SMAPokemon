import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import pokemonLogo from './Pokemon-Logo-700x394.png'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            id="pokemonLogo"
            src={pokemonLogo}
            alt="pokemon logo"
            style={{ maxWidth: 200 }}
          />
        </div>
        <>
          <header className="App-header">
            <Switch>
              <Route path="/pokedex">
                <Pokedex />
              </Route>
              <Route path="/search">
                <PokemonSearch />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </header>
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
