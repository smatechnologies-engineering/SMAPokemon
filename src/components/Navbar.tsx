import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import PokemonLogo from '../assests/Pokemon-Logo-700x394.png'
import '../App.css'
import { useState } from 'react'
import { styled } from '@mui/system'

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
})

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  '&:hover': {
    color: '#ffcb05',
  },
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}))

interface StyledTabProps {
  label: string
}

type TabIndexMap = {
  [id: number]: string
}

export function NavBar() {
  const [tabIndex, setTabIndex] = useState(0)
  const tabIndexToRoute: TabIndexMap = {
    0: '/',
    1: '/pokedex',
  }

  const history = useHistory()

  const handleTabChange = (_event: React.SyntheticEvent, tabIndex: number) => {
    history.push(tabIndexToRoute[tabIndex])
    setTabIndex(tabIndex)
  }

  return (
    <AppBar title="Pokemon Finder" position="static">
      <Toolbar>
        <Link to="/" onClick={() => setTabIndex(0)}>
          <img src={PokemonLogo} alt="logo" className="navbar-logo" />
        </Link>
        <StyledTabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            marginLeft: '20px',
          }}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: { backgroundColor: '#fff', color: '#fff' },
          }}
        >
          <StyledTab label="Pokemon Search" sx={{ color: '#fff' }} />
          <StyledTab
            label="All Pokemon"
            sx={{
              color: '#fff',
            }}
          />
        </StyledTabs>
      </Toolbar>
    </AppBar>
  )
}
