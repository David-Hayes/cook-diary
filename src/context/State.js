import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import Axios from 'axios'

// initial state
const initialState = {
  cooks: [],
  filter: '',
}

const apiEndpoint = '/.netlify/functions/'

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // actions
  function getCooks() {
    Axios.get(apiEndpoint + 'filter', {
      params: {
        filter: state.filter,
      },
    }).then((res) =>
      dispatch({
        type: 'GET_COOKS',
        payload: res.data,
      })
    )
  }

  function setFilter(txt) {
    dispatch({
      type: 'SET_FILTER',
      payload: txt,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        cooks: state.cooks,
        getCooks,
        filter: state.filter,
        setFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
