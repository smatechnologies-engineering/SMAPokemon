import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState, useCallback } from 'react'
import { SearchInput } from '../components/SearchInput'
import { SearchPokemonInfoCards } from '../components/SearchPokemonInfoCards'

export const checkArrayEquality = (
  array1: Array<string> | null,
  array2: Array<string> | null
) => {
  if (array1 === null && array2 === null) {
    return true
  }
  if (array1 === null || array2 === null) {
    return false
  }
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  )
}

export function Search() {
  const [pokemonNames, setPokemonNames] = useState<Array<string> | null>(null)

  const setPokemonNamesStrict = useCallback(
    (names: Array<string> | null) => {
      // only updating pokemonNames when needed so that this Search component doesn't unnecessarily re-render
      if (!checkArrayEquality(names, pokemonNames)) {
        setPokemonNames(names)
      }
    },
    [pokemonNames, setPokemonNames]
  )

  return (
    <>
      <Grid item xs={12}>
        <SearchInput setPokemonNames={setPokemonNamesStrict} />
      </Grid>
      {pokemonNames == null && (
        <Grid item xs={12} component={Typography}>
          Enter the name of the Pokémon in the search box.
        </Grid>
      )}
      {pokemonNames && pokemonNames.length === 0 && (
        <Grid item xs={12} component={Typography}>
          No results found.
        </Grid>
      )}
      {pokemonNames && pokemonNames.length > 0 && (
        <SearchPokemonInfoCards pokemonNames={pokemonNames} />
      )}
    </>
  )
}
