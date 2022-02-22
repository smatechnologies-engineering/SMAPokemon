import { createContext, useContext, useEffect, useState } from 'react'

type Pokedex = Record<
  string,
  { name: string; url: string; pokedexNumber: number }
>

export interface PokeapiPokedexResponse {
  results: Array<{ name: string; url: string }>
}

const PokedexContext = createContext<Pokedex>({})

export const usePokedex = () => useContext(PokedexContext)

export const mapResultsToPokedex = (
  results: PokeapiPokedexResponse['results']
): Pokedex =>
  results.reduce<Pokedex>((a, { name, url }) => {
    const splitUrl = url.split('/')
    return {
      ...a,
      [name]: {
        name,
        url,
        pokedexNumber: Number(splitUrl[splitUrl.length - 2]),
      },
    }
  }, {})

export function PokedexContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [pokedex, setPokedex] = useState<Pokedex>({})

  useEffect(() => {
    ;(async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = (await response.json()) as PokeapiPokedexResponse
      const reducedData = mapResultsToPokedex(data.results)
      setPokedex(reducedData)
    })()
  }, [setPokedex])

  return (
    <PokedexContext.Provider value={pokedex}>
      {children}
    </PokedexContext.Provider>
  )
}
