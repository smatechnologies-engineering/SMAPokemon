import { ChipProps } from '@mui/material/Chip'

export type Nullable<T> = T | null

export namespace PokeFaces {

    interface Pokemon {
        types: TypesProp[]
        sprites: SpriteProp
        species: PokemonProp
    }

    interface FlavorText {
        flavor_text: string
        language: PokemonProp
        version: PokemonProp
    }


    interface ColoredChipProps extends ChipProps {
        eltype: string
    }

    interface PokemonProp {
        name: string
        url: string
    }

    interface SpriteProp {
        back_default: string
        back_female: string
        back_shiny: string
        back_shiny_female: string
        front_default: string
        front_female: string
        front_shiny: string
        front_shiny_female: string
        other: ImageProp
    }

    interface ImageProp {
        "official-artwork": OfficialArtwork
    }

    interface OfficialArtwork {
        front_default: string
    }

    interface TypesProp {
        slot: number
        type: PokemonProp
    }
}

