import { useParams } from 'react-router-dom';
import { PokemonInfoCard } from './PokemonInfoCard'

export function PokemonCard(props: $FixMe) {
  const { pokemon } = useParams<{pokemon: string}>();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

  return (
  <>
    <div>Pokemon: {pokemon}</div>
    <PokemonInfoCard pokemon={{ name: pokemon, url }} />
  </>)
}
