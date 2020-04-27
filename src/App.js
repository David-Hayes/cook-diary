import React from 'react'
import { GlobalProvider } from './context/State'
import netlifyIdentity from 'netlify-identity-widget'

import { Header } from './components/Header'

import { CssBaseline } from '@material-ui/core'

netlifyIdentity.init()

function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Header />
    </GlobalProvider>
  )
}

export default App
