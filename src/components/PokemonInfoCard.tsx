import { FC, useEffect, useState } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { Loader } from '../components/Loader'
import { Pokemon, PokemonType, FlavorText } from 'pokenode-ts'
import { error } from '../shared/utils/Logger'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      textTransform: 'capitalize',
    },
  })
)
interface IProps {
  pokemon: Pokemon
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

// TODO: Add Filters by type, species, etc.
export const PokemonInfoCard: FC<IProps> = ({ pokemon }) => {
  const classes = useStyles()
  const [showLoader, setShowLoader] = useState<boolean>(true)
  const [details, setDetails] = useState<FlavorText>()

  useEffect(() => {
    ;(async function getText() {
      try {
        setShowLoader(true)
        const response = await fetch(pokemon?.species?.url)
        const data = await response.json()

        setDetails(
          data['flavor_text_entries']?.find(
            (t: FlavorText) => t.language.name === 'en'
          )
        )
      } catch (ex) {
        error(ex)
      } finally {
        setShowLoader(false)
      }
    })()
  }, [pokemon])

  return showLoader ? (
    <Loader />
  ) : (
    <Card sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}>
      <CardMedia
        component="img"
        alt={pokemon?.name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={pokemon?.sprites?.other['official-artwork']['front_default']}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.header}
        >
          {pokemon?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details?.flavor_text}
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
