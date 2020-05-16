export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELLER":
      return action.seller
    default:
      return state
  }
}
