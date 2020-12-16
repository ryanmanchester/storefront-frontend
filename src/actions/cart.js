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

export const removeItem = item => {
  return {
    type: "REMOVE_ITEM",
    item
  }
}

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  }
}

//async actions//

export const addToCart = itemData => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/items/add_to_cart', {
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
    fetch('http://localhost:3000/api/v1/items/get_current_cart', {
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
