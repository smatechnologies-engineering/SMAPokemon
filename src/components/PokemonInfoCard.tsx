import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface PokemonProp {
  name: string
  url: string
}

const obj: Record<string, string> = {
  fire: colors.red[500],
  grass: colors.lime[500],
  electric: colors.yellow[500],
  poison: colors.purple[300],
  ghost: colors.purple[600],
  water: colors.lightBlue[500],
  ice: colors.lightBlue[300],
  fairy: colors.pink[200],
  fighting: colors.brown[500],
  bug: colors.green[500],
  rock: colors.amber[700],
  psychic: colors.pink[400],
  normal: colors.grey[100],
  flying: colors.blue[300],
  ground: colors.amber[500],
  steel: colors.grey[600],
}

interface ColoredChipProps extends ChipProps {
  eltype: string
}

const ColoredChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'eltype',
})<ColoredChipProps>(({ eltype, theme }) => {
  const color: string = obj[eltype] || obj.normal
  return {
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
  }
})

interface Pokemon {
  id: number
  types: $FixMe
  sprites: $FixMe
  species: $FixMe
}

export function PokemonInfoCard(props: { pokemon: PokemonProp }) {
  const {
    pokemon: { name, url },
  } = props
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [details, setDetails] = useState({
    flavor_text: "This pokemons' flavor text.",
  })
  const flavorTextUrl = pokemon.species?.url

  useEffect(() => {
    ;(async function getData() {
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(data)
      setLoading(false)
    })()
  }, [url])

  useEffect(() => {
    ;(async function getText() {
      const response = await fetch(flavorTextUrl)
      const data = await response.json()
      console.log(data['flavor_text_entries'])
      setDetails(
        data['flavor_text_entries'].find(
          (t: Record<string, unknown>) => t.language.name === 'en'
        )
      )
    })()
  }, [flavorTextUrl])

  if (loading) {
    return <Skeleton variant="rectangular" width={345} height={385} />
  }

  return (
    <>
      <Card
        onClick={handleOpen}
        className="card"
        sx={{ maxWidth: 345, minWidth: 240, padding: 4, margin: 2 }}
      >
        <CardMedia
          component="img"
          alt={name}
          height="140"
          style={{ objectFit: 'contain' }}
          image={pokemon?.sprites?.other['official-artwork']['front_default']}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.flavor_text}
          </Typography>
        </CardContent>
        <CardActions>
          {pokemon?.types?.map((t: $FixMe) => (
            <ColoredChip
              label={t.type.name}
              key={t.type.name}
              eltype={t.type.name}
            />
          ))}
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            style={{ position: 'absolute', right: 0, top: 0 }}
            aria-label="delete"
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A bunch of photos and details about {name}...
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
