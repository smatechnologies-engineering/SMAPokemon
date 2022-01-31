import React, { useEffect, useState } from 'react'
import {
  PokemonAbilities,
  PokemonFlavorText,
  PokemonGen,
} from '../interfaces/pokemonInterface'
import '../styles/components/PokemonCard.css'
import { useLocation } from 'react-router-dom'
import { PokemonGenTable } from './PokemonGenTable'
import { Typography } from '@mui/material'

export function PokemonCard() {
  const location = useLocation<{ pokemon: PokemonGen }>()
  const newName: string =
    location.state.pokemon.name[0].toUpperCase() +
    location.state.pokemon.name.slice(1)

  const [details, setDetails] = useState({
    flavor_text: '',
  })
  const flavorTextUrl = location.state.pokemon.species.url

  useEffect(() => {
    ;(async function getText() {
      const response = await fetch(flavorTextUrl)
      const data = await response.json()

      setDetails(
        data['flavor_text_entries'].find(
          (t: PokemonFlavorText) => t.language.name === 'en'
        )
      )
    })()
  }, [flavorTextUrl])

  return (
    <div className="PokemonCardBg">
      <h1>hello</h1>
      <h1 id="pokemonName">{newName}</h1>
      <div className="InfoCard">
        <div className="row">
          <img
            alt="Pokemon"
            src={
              location.state.pokemon.sprites.other['official-artwork']
                .front_default
            }
            height="300"
          />
          <div>
            <h4 style={{ display: 'inline' }}>Abilities: </h4>
            {location.state.pokemon.abilities.map(
              (pokeAbilities: PokemonAbilities, idx: number) => {
                if (pokeAbilities.is_hidden) {
                  return (
                    <h4 key={pokeAbilities.ability.name}>
                      {idx + 1}. &nbsp;
                      {pokeAbilities.ability.name[0].toUpperCase() +
                        pokeAbilities.ability.name.slice(1)}
                      &nbsp;(hidden ability)
                    </h4>
                  )
                }
                return (
                  <h4 key={pokeAbilities.ability.name}>
                    {idx + 1}. &nbsp;
                    {pokeAbilities.ability.name[0].toUpperCase() +
                      pokeAbilities.ability.name.slice(1)}
                  </h4>
                )
              }
            )}

            <Typography variant="h6" color="text.primary">
              <h4 style={{ display: 'inline' }}>PokeDex Entry:</h4>{' '}
              {details.flavor_text}
            </Typography>
          </div>
        </div>
        <div className="tableBox">
          <PokemonGenTable pokemonGeneration={[location.state.pokemon]} />
        </div>
      </div>
    </div>
  )
}
