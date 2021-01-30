const accessoriesReducer = (state = {items: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_ACCESSORIES':
    return{
      ...state,
      items: [...state.items],
      isLoading: true
    }
    case 'GET_ACCESSORIES':
    return {
      ...state,
      items: action.items,
      isLoading: false
    }

    default:
    return state;

  }
}

export default accessoriesReducer
