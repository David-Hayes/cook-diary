import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { Link as RouterLink } from 'react-router-dom'

import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const classes = useStyles()
  const [loggedIn, setLoggedIn] = useState(!!netlifyIdentity.currentUser())

  netlifyIdentity.on('login', (user) => setLoggedIn(true))

  useEffect(() => {
    if (!loggedIn) {
      netlifyIdentity.open()
    } else {
      netlifyIdentity.close()
    }
  }, [loggedIn])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={RouterLink} to="/" color="inherit">
              Cook Diary
            </Link>
          </Typography>
          {loggedIn && (
            <Link component={RouterLink} to="/add" color="inherit">
              <AddIcon />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
