import React from 'react'
import { GlobalProvider } from './context/State'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { CookList } from './components/CooksList'
import { Add } from './components/Add'

import { CssBaseline, Container } from '@material-ui/core'
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
      <Router>
        <Header />
        <GlobalProvider>
          <Container>
            <Switch>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/">
                <CookList />
              </Route>
            </Switch>
          </Container>
        </GlobalProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
