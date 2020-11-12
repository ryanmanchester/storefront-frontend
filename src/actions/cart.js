export const addToCart = item => {
  return {
    type: "ADD_TO_CART",
    item
  }
}

export const removeItem = item => {
  return {
    type: "REMOVE_ITEM",
    item
  }
}
