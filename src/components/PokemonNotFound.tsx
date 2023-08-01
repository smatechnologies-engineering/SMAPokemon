import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

import pokeBallImg from '../assets/pokeball.png'

function PokemonNotFound() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 240, padding: 4 }}>
      <CardMedia
        component="img"
        alt={'Pokemon not found'}
        height="140"
        style={{ objectFit: 'contain' }}
        image={pokeBallImg}
        data-testid="pokeball-image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {"We couldn't find a pokemon with that name. Try again!"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default memo(PokemonNotFound)
