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
    fetch(`https://storefront-backend.herokuapp.com/api/v1/categories/${itemData.category}/items`, {
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
        const newItem =  item.data[0]
        dispatch(addNewItem(newItem))
        dispatch(clearItemForm())
        history.push(`/sellers/${newItem.attributes.seller_id}/items/${newItem.id}`)
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
    fetch(`https://storefront-backend.herokuapp.com/api/v1/categories/${itemData.category}/items/${itemData.itemId}`, {
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
          const updateItem =  item.data[0]
          dispatch(updateItemSuccess(updateItem))
          dispatch(clearItemForm())
          history.push(`/sellers/${updateItem.attributes.seller_id}/items/${updateItem.id}`)
          alert("Successfully updated your item")
        }


    })
    .catch(console.log)

  }
}

export const deleteItem = (itemData, history) => {
  return dispatch => {
    fetch(`https://storefront-backend.herokuapp.com/api/v1/categories/${itemData.relationships.category.data.id}/items/${itemData.id}`, {
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
        history.push(`/sellers/${itemData.relationships.seller.data.id}/items`)
        dispatch(deleteItemSuccess(itemData.id))
        alert(msg.message)
      }

      }
    )
  }
}
