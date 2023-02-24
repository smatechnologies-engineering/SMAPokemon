import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { PokemonType } from 'pokenode-ts'
import logo from '../assests/Pokemon-Logo-700x394.png'
import { useGetPokemon } from '../hooks/useGetPokemon'
import { useGetFlavorText } from '../hooks/useGetFlavorText'

interface PokemonInfoCardProps {
  name: string
}

const obj: Record<string, $FixMe> = {
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
  eltype: $FixMe
}

const ColoredChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'eltype',
})<ColoredChipProps>(({ eltype, theme }) => {
  const color: $FixMe = obj[eltype] || obj.normal
  return {
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
  }
})

export function PokemonInfoCard(props: PokemonInfoCardProps) {
  const { name } = props

  const { data: pokemon } = useGetPokemon(name)
  const { data: flavorText } = useGetFlavorText(pokemon)

  const cardImageUrl =
    pokemon?.sprites?.other?.['official-artwork']['front_default'] ?? logo

  return (
    <Card
      sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}
      aria-label="pokemon-info-card"
    >
      <CardMedia
        component="img"
        alt={name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={cardImageUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          aria-label="pokemon-info-card-name"
        >
          {name?.charAt(0).toUpperCase() + name?.slice(1)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          aria-label="pokemon-flavor-text"
        >
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
