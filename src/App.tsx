import './App.css'
import { Pokedex } from './pages/Pokedex'
import { PokemonSearch } from './pages/PokemonSearch'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import Box from '@mui/material/Box'

import { NavBar } from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Switch>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route exact path="/">
            <PokemonSearch />
          </Route>
          <Route path="/:pokemon">{/* <PokemonCard /> */}</Route>
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App
