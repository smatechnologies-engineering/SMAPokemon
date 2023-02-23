import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import PokemonLogo from '../assests/Pokemon-Logo-700x394.png'
import '../App.css'

type TabIndexMap = {
  [id: number]: string
}

export function NavBar() {
  const tabIndexToRoute: TabIndexMap = {
    0: '/',
    1: '/pokedex',
  }

  const history = useHistory()

  const handleTabChange = (_event: React.SyntheticEvent, tabIndex: number) => {
    history.push(tabIndexToRoute[tabIndex])
  }

  return (
    <AppBar title="Pokemon Finder" position="static">
      <Toolbar>
        <Link to="/">
          <img src={PokemonLogo} alt="logo" className="navbar-logo" />
        </Link>
        <Tabs
          onChange={handleTabChange}
          sx={{
            marginLeft: '20px',
            '& button:focus': { borderBottom: '2px solid white' },
          }}
        >
          <Tab label="Pokemon Search" sx={{ color: '#fff' }} />
          <Tab
            label="All Pokemon"
            sx={{
              color: '#fff',
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
