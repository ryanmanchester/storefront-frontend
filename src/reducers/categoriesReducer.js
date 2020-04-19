const categoriesReducer = (state = { list: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'LOADING_CATEGORIES':
      return {
        ...state,
        list: [...state.list],
        isLoading: true
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        list: action.categories,
        isLoading: false
      }

    default:
      return state;

  }
}

export default categoriesReducer;
