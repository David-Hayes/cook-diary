import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './context/State'
import netlifyIdentity from 'netlify-identity-widget'

import { Header } from './components/Header'
import { CookList } from './components/CookList'
import { Add } from './components/Add'

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
        <Router>
          <Header />
          <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <CookList />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
