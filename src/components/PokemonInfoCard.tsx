import { useCallback, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import PokeLoading from './PokeLoading'
// import * as types from '@material-ui/types'

interface PokemonProp {
  name: string
  url: string
}

const obj: Record<element, color['colors'][Colors][Grades]> = {
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

type Grades =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'A100'
  | 'A200'
  | 'A400'
  | 'A700'
type color = { colors: { [key in Colors]: { [key in Grades]: string } } }

type Colors =
  | 'red'
  | 'lime'
  | 'yellow'
  | 'purple'
  | 'purple'
  | 'lightBlue'
  | 'lightBlue'
  | 'pink'
  | 'brown'
  | 'green'
  | 'amber'
  | 'pink'
  | 'grey'
  | 'blue'
  | 'amber'
  | 'grey'

type element =
  | 'fire'
  | 'grass'
  | 'electric'
  | 'poison'
  | 'ghost'
  | 'water'
  | 'ice'
  | 'fairy'
  | 'fighting'
  | 'bug'
  | 'rock'
  | 'psychic'
  | 'normal'
  | 'flying'
  | 'ground'
  | 'steel'

interface ColoredChipProps extends ChipProps {
  eltype: element
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

interface Pokemon {
  types: pokemonTypesProps[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  species: {
    url: string
  }
}

interface PokemonDetails {
  flavor_text: string
}

interface tProps {
  language: {
    name: string
  }
}

interface pokemonTypesProps {
  slot: number
  type: {
    name: element
    url: string
  }
}

export function PokemonInfoCard(props: { pokemon: PokemonProp }) {
  const {
    pokemon: { name, url },
  } = props
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [details, setDetails] = useState<PokemonDetails>({
    flavor_text: 'Loading...',
  })
  // const flavorTextUrl = pokemon.species?.url

  const fetchInfo = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(data)
    } catch (e) {
      console.error(e)
    }
  }, [url])

  useEffect(() => {
    fetchInfo()
  }, [fetchInfo])

  useEffect(() => {
    const flavorTextUrl = pokemon?.species?.url
    try {
      fetch(flavorTextUrl)
        .then((data) => data.json())
        .then((data) => {
          setDetails(
            data['flavor_text_entries'].find(
              (t: tProps) => t.language.name === 'en'
            )
          )
        })
    } catch (e) {
      console.error(e)
    }
  }, [pokemon])

  if (Object.keys(pokemon).length == 0) {
    return (
      <Card sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}>
        <PokeLoading />
      </Card>
    )
  }
  return (
    <Card sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={pokemon?.sprites?.other['official-artwork']['front_default']}
      />
      <CardContent data-cy="PokemonCard">
        <Typography gutterBottom variant="h5" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.flavor_text}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        {pokemon?.types?.map((t: pokemonTypesProps) => (
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
