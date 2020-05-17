export const setCurrentSeller = (seller) => {
  return {
    type: "SET_CURRENT_SELLER",
    seller
  }
}

export const login = (creds) => {
  console.log('creds are', creds)
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/sellers/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(resp => resp.json())
    .then(seller => {
      if (seller.error) {
        alert(seller.error)
      } else {
        dispatch(setCurrentSeller(seller))
      }
    })
  }
}

export const getCurrentSeller = () => {

  return dispatch => {
    return fetch('http://localhost:3000/api/v1/sellers/get_current_seller', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    .then(resp => resp.json())
    .then(seller => {
      if (seller.error) {
        alert(seller.error)
      } else {
        dispatch(setCurrentSeller(seller))
      }
    })
  }
}
