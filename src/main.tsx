import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { warn } from './shared/utils/Logger'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { worker } from './backend/browser'

const theme = createTheme()

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start({
      onUnhandledRequest(req) {
        if (req.destination !== 'image') {
          warn(`Found an unhandled ${req.method} request to ${req.url.href}`)
        }
      },
    })
  }
}

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
})
