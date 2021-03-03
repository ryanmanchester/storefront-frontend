//sync action creators
export const setAccessories = items => {
  return {
    type: 'GET_ACCESSORIES',
    items
  }
}


//async action creators

export const getAccessories = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_ACCESSORIES'})
    fetch('https://storefront-backend.herokuapp.com/api/v1/categories/3/items')
    .then(resp => resp.json())
    .then(items => dispatch(setAccessories(items.data)))
    .catch(console.log)
  }
}
