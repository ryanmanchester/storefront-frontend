const womensItemsReducer = (state = {items: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_WOMENS_ITEMS':
    return{
      ...state,
      items: [...state.items],
      isLoading: true
    }
    case 'GET_WOMENS_ITEMS':
    return {
      ...state,
      items: action.items,
      isLoading: false
    }
    case 'ADD_WOMENS_ITEM':
    return state.items.concat(action.items)

    default:
    return state;

  }
}

export default womensItemsReducer
