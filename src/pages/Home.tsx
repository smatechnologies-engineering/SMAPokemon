import CatchingPokemon from '@mui/icons-material/CatchingPokemon'

export function Home() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <>
        <CatchingPokemon id="pokeballIcon" fontSize="large" />
      </>
      <>
        <p id="welcomeText" style={{ width: '50%', textAlign: 'center' }}>
          Welcome to Pokemon Central! You can look for a specific pokemon using
          the search feature, or take them all in at once by visiting the
          pokedex!{' '}
        </p>
      </>
    </div>
  )
}
