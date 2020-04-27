import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import netlifyIdentity from 'netlify-identity-widget'

// initial state
const initialState = {
  loggedIn: false,
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // authentication action
  function setLoggedIn() {
    let loggedIn = false
    if(netlifyIdentity.currentUser()) loggedIn = true
    dispatch({
      type: 'SET_AUTH',
      payload: loggedIn,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        loggedIn: state.loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
