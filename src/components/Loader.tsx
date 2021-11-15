import { FC } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      position: 'fixed',
      top: '50%',
      left: '50%',
    },
  })
)

export const Loader: FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.loader}>
      <CircularProgress />
    </Box>
  )
}
