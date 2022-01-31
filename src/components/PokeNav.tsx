import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import HomeIcon from '@mui/icons-material/Home'
import BookIcon from '@mui/icons-material/Book'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import { Button } from '@mui/material'
import '../styles/components/PokeNav.css'

export function PokeNav(): JSX.Element {
  return (
    <div className="topnav">
      <Button variant="text" href="/">
        <CatchingPokemonIcon fontSize="large" color="error" />
      </Button>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="LeMenu">
        <li>
          <a href="/">
            <HomeIcon sx={{ fontSize: 17 }} /> Home
          </a>
        </li>
        <li>
          <a href="/pokedex">
            <BookIcon sx={{ fontSize: 17 }} /> Pokedex
          </a>
        </li>
        <li>
          <a href="/poke-search">
            <GroupWorkIcon sx={{ fontSize: 17 }} /> Find Pokemon
          </a>
        </li>
      </ul>
    </div>
  )
}
