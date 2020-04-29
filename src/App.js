import React from 'react'
import { GlobalProvider } from './context/State'
import netlifyIdentity from 'netlify-identity-widget'

import { Header } from './components/Header'
import { CookList } from './components/CookList'

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
      <GlobalProvider>
        <Header />
        <CookList />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
