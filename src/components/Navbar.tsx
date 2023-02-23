import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assests/Pokemon-Logo-700x394.png'
import '../App.css'

export function NavBar() {
  return (
    <AppBar title="Pokemon Finder" position="static">
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginLeft: '20px',
          }}
        >
          <Link to="/" className="navbar-link">
            Pokemon Search
          </Link>
          <Link to="/pokedex" className="navbar-link">
            All Pokemon
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
