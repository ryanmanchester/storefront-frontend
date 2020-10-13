const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELLER":
      return action.seller
    case "CLEAR_CURRENT_SELLER":
      return initialState
    case "DELETE_ITEM":
    console.log("state from current user reducer ", state)
    console.log("action from current user reducer ", action)
    const items = state.included.filter(item =>  item.id !== action.itemId)
      return {
        ...state,
        included: items
      }
    default:
      return state
  }
}
