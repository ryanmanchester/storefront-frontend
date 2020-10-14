import { clearItemForm } from './newItemsForm'

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

export const deleteItemSuccess = itemId => {
    console.log("item id from delete success ", itemId)
  return {

    type: "DELETE_ITEM",
    itemId
  }
}


//async action creators
export const newItems = (itemData, history) => {
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
      if(item.error) {
        alert(item.error)
      } else {
        dispatch(addNewItem(item))
        dispatch(clearItemForm())
        history.push(`/sellers/${item.seller_id}/items/${item.id}`)
      }


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
        if (item.error) {
          alert(item.error)
        } else {
          dispatch(updateItemSuccess(item))
          history.push(`/sellers/${item.seller_id}/items/${item.id}`)
        }


    })
    .catch(console.log)

  }
}

export const deleteItem = (itemData, history) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/categories/${itemData.relationships.category.data.id}/items/${itemData.id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( resp => resp.json())
    .then(msg => {
      if (msg.error){
        alert(msg.error)
      } else{
        console.log("item data from fetch", itemData)
        console.log("item id from fetch request is ", itemData.id)
        history.push(`/sellers/${itemData.relationships.seller.data.id}/items`)
        dispatch(deleteItemSuccess(itemData.id))
        alert(msg.message)
      }

      }
    )
  }
}
