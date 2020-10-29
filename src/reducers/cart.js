
export default (state = { items: [] }, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
    const addItem = state.items.concat(action.item)
      return {
        ...state,
        items: addItem
      }
    default:
      return state
  }
}
