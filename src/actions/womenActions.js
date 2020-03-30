export const getWomensItems = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_WOMENS_ITEMS'})
    fetch('http://localhost:3000/api/v1/categories/2/items')
    .then(resp => resp.json())
    .then(items => dispatch({type: 'GET_WOMENS_ITEMS', items}))
  }
}
