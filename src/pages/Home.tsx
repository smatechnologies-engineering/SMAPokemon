import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Gengar() {
  return (
    <Box
      component="img"
      sx={{ width: '512px' }}
      src="src/gengar.gif"
      alt="Gengar"
    />
  )
}

export function Home() {
  return (
    <Container
      style={{ paddingBottom: 24, paddingTop: 24 }}
      maxWidth={'lg'}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Gengar />
      <Typography variant="h3">Gotta Catch &apos;Em All</Typography>
    </Container>
  )
}
