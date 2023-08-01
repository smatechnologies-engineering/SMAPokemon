import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './App'
import { worker } from './backend/browser'

const theme = createTheme()

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start()
  }
}

const queryClient = new QueryClient()

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
})
