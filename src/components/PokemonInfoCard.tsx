import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { PokeFaces } from '../global'

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

const ColoredChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'eltype',
})<PokeFaces.ColoredChipProps>(({ eltype, theme }) => {
  const color: string = obj[eltype] || obj.normal
  return {
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
  }
})

export function PokemonInfoCard(props: { pokemon: PokeFaces.Pokemon }) {
  const {
    pokemon: { species },
  } = props
  const [details, setDetails] = useState({
    flavor_text: "This pokemons' flavor text.",
  })

  const flavorTextUrl = species?.url

  const getText = async () => {
    const response = await fetch(flavorTextUrl)
    const data = await response.json()

    setDetails(
      data['flavor_text_entries'].find(
        (t: PokeFaces.FlavorText) => t.language?.name === 'en'
      )
    )
  }

  useEffect(() => {
    getText()
  }, [flavorTextUrl])

  return (
    <Card
      style={{ margin: 'auto' }}
      sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}
    >
      <CardMedia
        component="img"
        alt={species?.name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={
          props.pokemon?.sprites?.other['official-artwork']?.front_default ??
          'https://www.sideshow.com/storage/product-images/907125/poke-ball_pokemon_gallery_5fbbfd263bd2a.jpg'
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {species?.name.charAt(0).toUpperCase() + species?.name.slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.flavor_text}
        </Typography>
      </CardContent>
      <CardActions>
        {props.pokemon?.types?.map((t: PokeFaces.TypesProp) => (
          <ColoredChip
            label={t.type?.name}
            key={t.type?.name}
            eltype={t.type?.name}
          />
        ))}
      </CardActions>
    </Card>
  )
}
