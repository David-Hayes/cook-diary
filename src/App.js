import React from 'react'
import { GlobalProvider } from './context/State'

import { Header } from './components/Header'
import { CookList } from './components/CooksList'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <GlobalProvider>
        <CookList />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
