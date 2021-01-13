export const addToCartSuccess = item => {
  return {
    type: "ADD_TO_CART",
    item
  }
}

export const setCurrentCart = cart => {
  return {
    type: "SET_CURRENT_CART",
    cart
  }
}

export const removeItemSuccess = item => {
  return {
    type: "REMOVE_ITEM",
    item
  }
}

export const clearCartSuccess = () => {
  return {
    type: "CLEAR_CART"
  }
}

//async actions//

export const addToCart = itemData => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/carts/add_to_cart', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })

    .then(resp => resp.json())
    .then(item => {
      if(item.error){
        alert(item.error)
      } else {
        dispatch(addToCartSuccess(item))
      }
    })
  }
}

export const getCurrentCart = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/carts/get_current_cart', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(cart => {
      if(cart.error){
        alert(cart.error)
      } else {
        dispatch(setCurrentCart(cart))
      }
    })
  }
}

export const clearCart = () => {
  return dispatch => {
    dispatch(clearCartSuccess())
    return fetch('http://localhost:3000/api/v1/carts/clear_cart', {
      credentials: 'include',
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(msg => alert(msg.message))
  }
}

export const placeOrder = (history) => {
  return dispatch => {
    dispatch(clearCartSuccess())
    history.push('/order')
    return fetch('http://localhost:3000/api/v1/orders/place_order', {
      credentials: 'include',
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(msg => alert(msg.message))
  }
}

export const removeItem = (item) => {
  return dispatch => {
    dispatch(removeItemSuccess(item))
    return fetch('http://localhost:3000/api/v1/items/remove_item', {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(resp => resp.json())
    .then(msg => alert(msg.message))
  }
}
