import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { PokemonInfoCard } from '../components/PokemonInfoCard'
import '../styles/pages/PokemonSearch.css'
import { PokemonGen } from '../interfaces/pokemonInterface'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import { Link } from 'react-router-dom'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'

function isNum(val: string): boolean {
  return !isNaN(Number(val))
}

export function PokemonSearch() {
  const [val, setVal] = useState('')
  const [pokemonFound, setPokemonFound] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonGen>()

  const displayBtnLink = () => {
    if (pokemonFound && typeof pokemon != 'undefined') {
      return (
        <Link
          to={{
            pathname: `/info/${pokemon?.name}`,
            state: { pokemon: pokemon },
          }}
        >
          <DescriptionIcon />
        </Link>
      )
    }
    return <DoDisturbIcon />
  }

  const actions = [
    {
      icon: displayBtnLink(),
      name: 'Pokemon Description',
    },
  ]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFound(false)
    if (isNum(e.currentTarget.value)) {
      setVal(e.currentTarget.value)
    } else {
      const myTargetValue: string = e.currentTarget.value
      setVal(myTargetValue.charAt(0).toLowerCase() + myTargetValue.slice(1))
    }
  }
  async function fetchPokemon() {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setPokemon(data)
        setPokemonFound(true)
      } else {
        setPokemonFound(false)
        return Error(response.statusText)
      }
    } catch (e) {
      setPokemonFound(false)
      return console.error(e)
    }
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${val}/`

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetchPokemon()
  }

  const tellMeThePokemon = () => {
    let callName = ''
    if (pokemonFound) {
      callName = `This is ${pokemon?.name}`
    } else {
      callName = 'There is no Pokemon here'
    }
    const utterance = new SpeechSynthesisUtterance(callName)
    utterance.voice = speechSynthesis.getVoices()[7]
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="containerSearch">
      <Container
        style={{ paddingBottom: 24, paddingTop: 100, textAlign: 'center' }}
        maxWidth={'lg'}
      >
        <Grid container spacing={{ xs: 4 }} columns={{ xs: 4 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Typography variant="h2">Find your Pokemon</Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} rowSpacing={10}>
            <TextField
              name="searchPokemon"
              variant="filled"
              color="secondary"
              label="search pokemon"
              onChange={handleChange}
            />
            <div className="space"></div>
            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </Grid>

          <Grid
            container
            item
            xs={4}
            sm={4}
            md={4}
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <div className="outerCard">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="pokemonCard">
                {pokemonFound && pokemon?.id ? (
                  <PokemonInfoCard pokemon={{ name: val, url }} />
                ) : (
                  <div className="emptyCard">
                    <p className="foundText">No Pokemon is found... </p>
                  </div>
                )}
              </div>
              <div id="left">
                <IconButton
                  aria-label="fingerprint"
                  color="error"
                  onClick={tellMeThePokemon}
                >
                  <FiberManualRecordIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </div>

              <Box
                sx={{ height: 10, transform: 'translateZ(0px)', flexGrow: 1 }}
              >
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: 12, right: 1 }}
                  icon={<SpeedDialIcon />}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
