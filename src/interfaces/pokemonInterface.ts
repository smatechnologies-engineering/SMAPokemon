export interface PokemonGen {
  id: number
  name: string
  sprites: PokemonSprites
  types: Array<PokemonType>
  abilities: Array<PokemonAbilities>
  stats: Array<PokemonStats>
  species: PokemonSpecies
  height: number
  weight: number
  loading: boolean
}

export interface PokemonStats {
  base_stat: number
  stat: { name: string }
}

export interface PokemonSprites {
  back_default: string
  back_female?: string
  back_shiny?: string
  back_shiny_female?: string
  front_default: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string
  other: {
    'official-artwork': {
      front_default: string
    }
  }
  versions: {
    'generation-viii': {
      icons: {
        front_default: string
      }
    }
  }
}

export interface PokemonType {
  type: {
    name: string
  }
}

export interface PokemonAbilities {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
}

export interface PokemonFlavorText {
  language: {
    name: string
    url: string
  }
}

export interface PokemonSpecies {
  name: string
  url: string
}
