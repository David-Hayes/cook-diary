import React from 'react'

import { Header } from './components/Header'
import { CookList } from './components/CooksList'

import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <CookList />
    </>
  )
}

export default App
