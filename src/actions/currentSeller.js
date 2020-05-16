export const setCurrentSeller = (seller) => {
  return {
    type: "SET_CURRENT_SELLER",
    seller
  }
}

export const login = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/sellers/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: "Sarah", password: "password"})
    })
  }
}
