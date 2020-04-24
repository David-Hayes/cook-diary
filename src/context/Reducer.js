export default (state, action) => {
  switch (action.type) {
    case 'GET_COOKS':
      return {
        ...state,
        cooks: action.payload,
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
