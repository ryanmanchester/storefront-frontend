//sync action creators
export const setMensItems = items => {
  return {
    type: 'GET_MENS_ITEMS',
    items
  }
}

export const addMensItem = item => {
  return {
    type: "ADD_MENS_ITEM",
    item
  }
}

//async action creators

export const getMensItems = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_MENS_ITEMS'})
    fetch('http://localhost:3000/api/v1/categories/1/items')
    .then(resp => resp.json())
    .then(items => dispatch(setMensItems(items)))
  }
}
