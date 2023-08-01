import type { CSSProperties } from 'react'
import Card, { CardProps } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import type { PokemonType } from 'pokenode-ts'
import { useGetPokemon } from '../hooks/useGetPokemon'
import { useGetFlavorText } from '../hooks/useGetFlavorText'

import pokeball from '../assets/pokeball.png'

interface PokemonInfoCardProps extends CardProps {
  name: string
}

type ChipColor = Exclude<CSSProperties['backgroundColor'], undefined>
const obj: Record<string, ChipColor> = {
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
  eltype: keyof typeof obj
}

const ColoredChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'eltype',
})<ColoredChipProps>(({ eltype, theme }) => {
  const color: ChipColor = obj[eltype] || obj.normal
  return {
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
  }
})

const capitalize = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : ''

export function PokemonInfoCard(props: PokemonInfoCardProps) {
  const { name, ...rest } = props

  const { data: pokemon } = useGetPokemon(name)
  const { data: flavorText } = useGetFlavorText(pokemon)

  const cardImageUrl =
    pokemon?.sprites?.other?.['official-artwork']?.front_default ?? pokeball

  return (
    <Card {...rest} sx={{ maxWidth: 345, minWidth: 240, padding: 4 }} data-testid="pokemon-info-container">
      <CardMedia
        component="img"
        alt={name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={cardImageUrl}
        loading="lazy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {capitalize(name)}
        </Typography>
        <Typography variant="body2" color="text.secondary" width={240}>
          {flavorText}
        </Typography>
      </CardContent>
      <CardActions>
        {pokemon?.types?.map((t: PokemonType) => (
          <ColoredChip
            label={t.type.name}
            key={t.type.name}
            eltype={t.type.name}
          />
        ))}
      </CardActions>
    </Card>
  )
}
