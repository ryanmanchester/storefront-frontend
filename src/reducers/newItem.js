const newItem = (state = {item: []}, action ) => {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return state.item.concat(action.item)
    case 'UPDATE_ITEM':
      console.log(action)
      return state
    default:
      return state

  }
}



export default newItem
