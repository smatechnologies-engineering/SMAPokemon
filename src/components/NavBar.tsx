import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import makeStyles from '@mui/styles/makeStyles'

interface PageFormat {
  title: string
  url: string
}
const pages: PageFormat[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Pokemon Search',
    url: '/pokemon-search',
  },
  {
    title: 'Pokedex',
    url: '/pokedex',
  },
]

const useStyles = makeStyles(() => ({
  logo: {
    backgroundImage: `url(https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w512)`,
    backgroundSize: 'contain',
    objectFit: 'contain',
    width: 148,
    height: 48,
    backgroundRepeat: 'no-repeat',
  },
}))

export function NavBar() {
  const history = useHistory()

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [activePage, setActivePage] = useState<String>('')
  const classes = useStyles()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  useEffect(() => {
    history.push(activePage.toString())
  }, [activePage])

  return (
    <AppBar position="static" component="nav" style={{ background: '#2E3B55' }} data-testid="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              data-testid="toggle-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    setActivePage(page.url)
                    handleCloseNavMenu()
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className={classes.logo} />
          <Box flexGrow={1} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => (
              <Button
                data-testid={page.title}
                key={page.title}
                onClick={() => setActivePage(page.url)}
                sx={{ color: '#fff' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}