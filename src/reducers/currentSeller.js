export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELLER":
      return action.seller
    case "CLEAR_CURRENT_SELLER":
      return null
    default:
      return state
  }
}
