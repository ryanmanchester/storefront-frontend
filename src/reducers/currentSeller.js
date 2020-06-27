const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELLER":
      return action.seller
    case "CLEAR_CURRENT_SELLER":
      return initialState
    default:
      return state
  }
}
