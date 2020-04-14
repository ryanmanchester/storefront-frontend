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
    default:
    return state;

  }
}

export default womensItemsReducer
