export const newOrder = cart => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/orders', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
  }
}
