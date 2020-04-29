import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import Axios from 'axios'

// initial state
const initialState = {
  cooks: [],
}

const apiEndpoint = '/.netlify/functions/'

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // actions
  function getCooks() {
    Axios.get(apiEndpoint + 'getAll').then((res) =>
      dispatch({
        type: 'GET_COOKS',
        payload: res.data,
      })
    )
  }

  return (
    <GlobalContext.Provider
      value={{
        cooks: state.cooks,
        getCooks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
