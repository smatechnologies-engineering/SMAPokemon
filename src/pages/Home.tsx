import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { PageContainer } from '../components/PageContainer'

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
    <PageContainer
      dataQA="home-page"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Gengar />
      <Typography variant="h3">Gotta Catch &apos;Em All</Typography>
    </PageContainer>
  )
}
