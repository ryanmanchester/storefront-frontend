
export default (state = { items: []}, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
    const addItem = state.items.concat(action.item)
      return {
        ...state,
        items: addItem

      }
      case "REMOVE_ITEM":

      const itemsList = state.items.filter(item => item.id !== action.item.id)
      return {
        ...state,
        items: itemsList,
      }
      case "CLEAR_CART":
      return {
        items: [],
      }
      case "SET_CURRENT_CART":
      return {
        ...state,
        items: action.cart
      }
    default:
      return state
  }
}
