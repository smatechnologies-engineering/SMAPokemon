import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Button } from '@mui/material'
import { Button } from '@mui/material'

const Nav = () => {
  const history = useHistory()

  function homeClick() {
    history.push('/')
  }

  function searchClick() {
    history.push('/search')
  }

  function pokedexClick() {
    history.push('/pokedex')
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button onClick={homeClick}>Home</Button>
        <Button onClick={searchClick}>Search</Button>
        <Button onClick={pokedexClick}>Pokedex</Button>
      </div>
    </div>
  )
}

export default Nav
