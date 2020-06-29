//sync action creators

export const setCategories = categories => {
  return {
    type: 'GET_CATEGORIES',
    categories
  }
}

//async action creators
export const getCategories = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'})
    fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(categories =>  dispatch(setCategories(categories.data)))
  }
}
