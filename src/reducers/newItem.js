const newItem = (state = {item: []}, action ) => {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return state.item.concat(action.item)
    default:
      return state

  }
}

export default newItem
