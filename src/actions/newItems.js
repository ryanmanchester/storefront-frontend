//sync action creators
export const addNewItem = item => {
  return {
    type: "ADD_NEW_ITEM",
    item
  }
}

export const updateItemSuccess = item => {
  return {
    type: "UPDATE_ITEM",
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
        dispatch(addNewItem(item))
        dispatch({type: "CLEAR_NEW_ITEMS_FORM"})
        history.push(`/sellers/${item.seller_id}/items/${item.id}`)

    })
    .catch(console.log)

  }
}
export const updateItem = (itemData, history) => {
  return dispatch => {
    const sendItem = {
      name: itemData.name,
      category_id: itemData.category,
      description: itemData.description,
      size: itemData.itemSize,
      price: itemData.price,
      image_url: itemData.imageUrl
    }
    console.log(itemData.itemId)
    fetch(`http://localhost:3000/api/v1/categories/${itemData.category}/items/${itemData.itemId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendItem)
    })
    .then(resp => resp.json())
    .then(item => {
        dispatch(updateItemSuccess(item))
        dispatch({type: "CLEAR_NEW_ITEMS_FORM"})
        history.push(`/sellers/${item.seller_id}/items/${item.id}`)

    })
    .catch(console.log)

  }
}
