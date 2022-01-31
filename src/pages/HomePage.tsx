import React, { useEffect } from 'react'
import '../styles/pages/HomePage.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { PokemonGen } from '../interfaces/pokemonInterface'
import { PokemonGenTable } from '../components/PokemonGenTable'

enum PokemonRegion {
  Kanto = 1,
  Johto = 152,
  Hoenn = 252,
  Shinnoh = 387,
  Unova = 495,
  Kalos = 650,
  Alola = 722,
  Galar = 810,
}

export function HomePage(): JSX.Element {
  const style: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: '24',
  }

  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [pokemonGeneration, setPokemonGeneration] = React.useState<
    Array<PokemonGen>
  >([])

  useEffect(() => {
    async function getPokemonFromRegion(region: number) {
      for (
        let pokemonIndex = region;
        pokemonIndex < region + 9;
        pokemonIndex++
      ) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
        const response = await fetch(url)
        const data = await response.json()
        data.loading = true
        setPokemonGeneration((oldData) => [...oldData, data])
      }
    }
    getPokemonFromRegion(PokemonRegion.Kanto)
    getPokemonFromRegion(PokemonRegion.Johto)
    getPokemonFromRegion(PokemonRegion.Hoenn)
    getPokemonFromRegion(PokemonRegion.Shinnoh)
    getPokemonFromRegion(PokemonRegion.Unova)
    getPokemonFromRegion(PokemonRegion.Kalos)
    getPokemonFromRegion(PokemonRegion.Alola)
    getPokemonFromRegion(PokemonRegion.Galar)
  }, [])

  return (
    <div className="container">
      <div className="TopHalf">
        <Typography variant="h4" component="h1" style={{ marginTop: '5%' }}>
          Gotcha Pokemon
        </Typography>
        <div className="PokemonProfessorBox">
          <img
            alt="Pokemon Professors"
            src={
              'https://archive-media-0.nyafuu.org/vp/image/1575/83/1575833478104.jpg'
            }
            width="52%"
            height="100%"
            style={{ borderRadius: '10%', marginTop: '5%' }}
          />
        </div>
      </div>

      <div className="box">
        <div className="Middle">
          <div className="centerLayer">
            <Button onClick={handleOpen} className="about-btn">
              About
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  About Gotcha
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  This website is purely for your entertainment to learn about
                  your favorite Pokemon or Pokemon in general and to build your
                  own dream team!
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div className="BottomHalf">
        <PokemonGenTable pokemonGeneration={pokemonGeneration} />
      </div>
    </div>
  )
}
