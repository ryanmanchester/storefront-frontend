export const getCategories = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(categories => dispatch({type: 'GET_CATEGORIES', categories: categories}))
  }
}
