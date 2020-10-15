const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SELLER":
      return action.seller
    case "CLEAR_CURRENT_SELLER":
      return initialState
    case 'ADD_NEW_ITEM':
      const newItem = state.included.concat(action.item)
        return {
          ...state,
          included: newItem
        }
    case 'UPDATE_ITEM':
      const editItem = state.included.concat(action.item)
      return {
        ...state,
        included: editItem
      }
    case "DELETE_ITEM":
      const items = state.included.filter(item =>  item.id !== action.itemId)
      return {
        ...state,
        included: items
      }
    default:
      return state
  }
}
