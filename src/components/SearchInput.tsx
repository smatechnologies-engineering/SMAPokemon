import TextField from '@mui/material/TextField'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { usePokedex } from './PokedexContextProvider'

interface SearchInputProps {
  setPokemonNames: (names: Array<string> | null) => void
}

export function SearchInput({ setPokemonNames }: SearchInputProps) {
  const [value, setValue] = useState<string>('')
  const pokedex = usePokedex()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  useEffect(() => {
    if (value === '') {
      setPokemonNames(null)
    } else {
      setPokemonNames(
        Object.keys(pokedex).filter((name) => name.startsWith(value))
      )
    }
  }, [value, pokedex, setPokemonNames])

  return (
    <TextField
      data-qa="search-input"
      variant="outlined"
      color="secondary"
      label="search pokemon"
      onChange={handleChange}
      sx={{ width: '256px' }}
    >
      {value}
    </TextField>
  )
}
