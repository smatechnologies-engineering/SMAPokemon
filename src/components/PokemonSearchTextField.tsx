import { FC, useState, useCallback, useMemo, useEffect } from 'react'
import { error } from '../shared/utils/Logger'
import { TextField, Grid, debounce } from '@mui/material'
import { Pokemon } from 'pokenode-ts'

interface IProps {
  debounceInterval: number
  setPokemon: (pokemon: Pokemon) => void
  setIsPokemonFound: (isPokemonFound: boolean) => void
}

export const PokemonSearchTextField: FC<IProps> = (props) => {
  const { debounceInterval, setPokemon, setIsPokemonFound } = props
  const [val, setVal] = useState<string>('')

  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchVal: string) => {
        if (searchVal) {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${searchVal}`
            )
            const pokemonData = await response.json()
            setPokemon(pokemonData)
            setIsPokemonFound(true)
          } catch (e) {
            error(e)
            setIsPokemonFound(false)
          }
        } else {
          setIsPokemonFound(false)
        }
      }, debounceInterval),
    [debounceInterval, setPokemon, setIsPokemonFound]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value)
      debouncedSearch(e.target.value)
    },
    [debouncedSearch]
  )

  return (
    <Grid item xs={4} sm={4} md={4}>
      <TextField
        id="searchPokemon"
        variant="outlined"
        color="secondary"
        label="search pokemon"
        value={val}
        onChange={handleChange}
      />
    </Grid>
  )
}
