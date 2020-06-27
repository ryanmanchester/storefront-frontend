export const newItems = (itemData) => {
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
    .then(console.log)
    .catch(console.log)

  }
}
