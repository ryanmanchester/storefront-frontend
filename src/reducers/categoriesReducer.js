const categoriesReducer = (state = { categories: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_CATEGORIES':
      return {
        ...state,
        categories: [...state.categories],
        isLoading: true
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
        isLoading: false
      }

    default:
      return state;

  }
}

export default categoriesReducer;
