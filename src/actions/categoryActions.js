export const getCategories = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'})
    fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(categories =>  dispatch({type: 'GET_CATEGORIES', categories}))
  }
}
