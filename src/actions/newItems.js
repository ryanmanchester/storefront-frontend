//sync action creators
export const addMensItem = item => {
  return {
    type: "ADD_MENS_ITEM",
    item
  }
}

export const addWomensItem = item => {
  return {
    type: "ADD_WOMENS_ITEM",
    item
  }
}

//async action creators
export const newItems = (itemData, history) => {
  console.log(itemData.category)
  return dispatch => {
    const sendItem = {
      name: itemData.name,
      category_id: itemData.category,
      description: itemData.description,
      size: itemData.itemSize,
      price: itemData.price,
      image_url: itemData.imageUrl
    }
    fetch(`http://localhost:3000/api/v1/categories/${itemData.category}/items`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendItem)
    })
    .then(resp => resp.json())
    .then(item => {
      if (item.category_id === 1) {
        dispatch(addMensItem(item))
        dispatch({type: "CLEAR_NEW_ITEMS_FORM"})
        history.push(`/sellers/${item.seller_id}/items/${item.id}`)
      } else if (item.category_id === 2) {
        dispatch(addWomensItem(item))
        dispatch({type: "CLEAR_NEW_ITEMS_FORM"})
        history.push(`/sellers/${item.seller_id}/items/${item.id}`)
      } else{
        alert(item.error)
      }
    })
    .catch(console.log)

  }
}
