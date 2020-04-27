import React from 'react'
const netlifyIdentity = require('netlify-identity-widget')

function App() {

  netlifyIdentity.open();

  return <></>
}

export default App
