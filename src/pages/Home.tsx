import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

export function Home() {
  return (
    <Container style={{ paddingBottom: 24, paddingTop: 24 }} maxWidth={'lg'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">Home</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
          <Typography variant="h3">SMA Pokemon</Typography>
          <Typography component="div">(Gotta catch 'em all!)</Typography>
        </Grid>

        <Grid item xs={2} sm={2} md={2}></Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Typography component="div" style={{ textAlign: 'center' }}>
            <SearchIcon color="disabled" sx={{ fontSize: 100 }} />
          </Typography>

          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            <Link underline="hover" color="inherit" component={RouterLink} to="/search">Pokemon Search</Link>
          </Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <Typography component="div" style={{ textAlign: 'center' }}>
            <ListIcon color="disabled" sx={{ fontSize: 100 }} />
          </Typography>

          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            <Link underline="hover" color="inherit" component={RouterLink} to="/pokedex">Pokedex</Link>
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}></Grid>
      </Grid>
    </Container>
  )
}
