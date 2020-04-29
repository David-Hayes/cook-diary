export default (state, action) => {
  switch (action.type) {
    case 'GET_COOKS':
      return {
        ...state,
        cooks: action.payload,
      }
    default:
      return state
  }
}
