import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

import './Header.css'

export function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '32px',
        height: '64px',
        paddingLeft: '16px',
      }}
    >
      <Link to="/">
        <img
          className="Pokemon-Logo"
          src="/src/Pokemon-Logo-700x394.png"
          alt="Pokemon Logo"
        />
      </Link>
      <Link to="/pokedex">
        <Typography variant="h6">Pokédex</Typography>
      </Link>
      <Link to="/search">
        <Typography variant="h6">Search</Typography>
      </Link>
    </AppBar>
  )
}
