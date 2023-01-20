import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { PokemonCard } from './components/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Navbar'>
        <Link style={{ textDecoration: 'none' }} to="/">
            <div className='Menu'>Home</div>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/Pokedex">
            <div className='Menu'>Pokedex</div>
          </Link>
        </div>
        <header className="App-header">
          <Switch>
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route exact path="/">
              <PokemonSearch />
            </Route>
            <Route path="/:pokemon">
              <PokemonCard /> 
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
