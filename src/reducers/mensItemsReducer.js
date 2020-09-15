const mensItemsReducer = (state = {items: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_MENS_ITEMS':
    return{
      ...state,
      items: [...state.items],
      isLoading: true
    }
    case 'GET_MENS_ITEMS':
    return {
      ...state,
      items: action.items,
      isLoading: false
    }

    default:
    return state;

  }
}

export default mensItemsReducer
