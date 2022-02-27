import { PokeFaces, Nullable } from '../global'

export function LoadingPokemon(props: {
  pokemon: Nullable<PokeFaces.Pokemon>
}) {
  const pokeName = props.pokemon?.species?.name

  const capitalize = (name: string) => {
    return name && name[0].toUpperCase() + name.slice(1)
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <div>
          <p id="loadingText">
            Just a sec, {capitalize(pokeName ?? '')} is gathering friends!
          </p>
        </div>
      </div>
      <img
        id="pokeImage"
        alt=""
        src={props.pokemon?.sprites?.front_default}
      ></img>
    </div>
  )
}
