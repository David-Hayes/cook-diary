import React from 'react'
import { GlobalProvider } from './context/State'

import { Header } from './components/Header'
import { CookList } from './components/CooksList'

import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <GlobalProvider>
        <CookList />
      </GlobalProvider>
    </>
  )
}

export default App
