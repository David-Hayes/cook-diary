import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import { Header } from './components/Header'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

netlifyIdentity.init()

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
