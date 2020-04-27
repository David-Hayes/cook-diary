export default (state, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        loggedIn: action.payload,
      }
    default:
      return state
  }
}