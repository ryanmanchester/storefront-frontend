const mensItemsReducer = (state = {mensItems: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_MENS_ITEMS':
    return{
      ...state,
      mensItems: [...state.mensItems],
      isLoading: true
    }
    case 'GET_MENS_ITEMS':
    return {
      ...state,
      mensItems: action.items,
      isLoading: false
    }
    default:
    return state;

  }
}

export default mensItemsReducer
