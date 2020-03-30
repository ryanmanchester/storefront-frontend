export const getMensItems = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_MENS_ITEMS'})
    fetch('http://localhost:3000/api/v1/categories/1/items')
    .then(resp => resp.json())
    .then(items => dispatch({type: 'GET_MENS_ITEMS', items}))
  }
}