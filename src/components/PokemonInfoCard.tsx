import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip, { ChipProps } from '@mui/material/Chip'
import * as colors from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import {
  PokemonFlavorText,
  PokemonSpecies,
  PokemonSprites,
  PokemonType,
} from '../interfaces/pokemonInterface'

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

export const ColoredChip = styled(Chip, {
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
  name: string
  types: Array<PokemonType>
  sprites: PokemonSprites
  species: PokemonSpecies
  order: string
}

export function PokemonInfoCard(props: { pokemon: PokemonProp }) {
  const {
    pokemon: { name, url },
  } = props
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [details, setDetails] = useState({
    flavor_text: "This pokemons' flavor text.",
  })
  const flavorTextUrl = pokemon.species?.url

  useEffect(() => {
    ;(async function getData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setPokemon(data)
      } catch (e: any) {
        throw new Error(e)
      }
    })()
  }, [url])

  useEffect(() => {
    ;(async function getText() {
      try {
        const response = await fetch(flavorTextUrl)
        const data = await response.json()

        setDetails(
          data['flavor_text_entries'].find(
            (t: PokemonFlavorText) => t.language.name === 'en'
          )
        )
      } catch (e: any) {
        throw new Error(e)
      }
    })()
  }, [flavorTextUrl])

  return (
    <Card sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}>
      <div>{pokemon.id}</div>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        style={{ objectFit: 'contain' }}
        image={pokemon?.sprites?.other['official-artwork']['front_default']}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.flavor_text}
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
