const womensItemsReducer = (state = {womensItems: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_WOMENS_ITEMS':
    return{
      ...state,
      womensItems: [...state.womensItems],
      isLoading: true
    }
    case 'GET_WOMENS_ITEMS':
    return {
      ...state,
      womensItems: action.items,
      isLoading: false
    }
    default:
    return state;

  }
}

export default womensItemsReducer
