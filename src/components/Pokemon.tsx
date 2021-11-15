import { FC } from 'react'
import { PokemonInfoCard } from './PokemonInfoCard'
import { Pokemon } from 'pokenode-ts'

interface IProps {
  pokemon?: Pokemon
}

export const PokemonCard: FC<IProps> = ({ pokemon }) => {
  return pokemon ? <PokemonInfoCard pokemon={pokemon} /> : null
}
