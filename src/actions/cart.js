export const addToCart = item => {
  console.log("item from action creator", item)
  return {
    type: "ADD_TO_CART",
    item
  }
}
