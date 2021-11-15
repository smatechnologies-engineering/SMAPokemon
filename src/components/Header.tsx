import { FC } from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import AppLogo from '../Pokemon-Logo-700x394.png'
import { createStyles, makeStyles } from '@mui/styles'

interface IProps {
  className: string
}
const headersData = [
  {
    label: 'Search',
    href: '/search',
  },
  {
    label: 'Pokedex',
    href: '/pokedex',
  },
]

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      maxWidth: 160,
    },
    menuButton: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      size: '18px',
      marginLeft: '38px',
    },
  })
)

export const Header: FC<IProps> = ({ className }) => {
  const classes = useStyles()
  const appLogo = <img src={AppLogo} alt="logo" className={classes.logo} />

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          className={classes.menuButton}
          color={'inherit'}
          to={href}
          component={Link}
        >
          {label}
        </Button>
      )
    })
  }

  const renderToolbar = () => {
    return (
      <Toolbar>
        <Link to="/">{appLogo}</Link>
        {getMenuButtons()}
      </Toolbar>
    )
  }

  return (
    <header id={'header'} className={className}>
      <AppBar position={'static'}>{renderToolbar()}</AppBar>
    </header>
  )
}

export default Header
