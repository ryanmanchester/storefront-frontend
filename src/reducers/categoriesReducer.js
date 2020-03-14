const categoriesReducer = (state = {categories: []}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: state.categories
      }

    default:
      return state;

  }
}

export default categoriesReducer;
