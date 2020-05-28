export const setCurrentSeller = (seller) => {
  return {
    type: "SET_CURRENT_SELLER",
    seller
  }
}

export const clearCurrentSeller = () => {
  return {
    type: "CLEAR_CURRENT_SELLER"
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
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentSeller(response.data))
        dispatch({type: "CLEAR_LOGIN_FORM"})
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
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentSeller(response.data))
      }
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentSeller())
    return fetch('http://localhost:3000/api/v1/sellers/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}
