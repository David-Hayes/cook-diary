import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/State'

export const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(GlobalContext)

  useEffect(setLoggedIn,[]);

  return (
    <>
    Logged: {loggedIn ? <>True</> : <>False</>}
    </>
  )
}
