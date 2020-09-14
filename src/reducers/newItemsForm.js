const initialState = {
  name:'',
  description:'',
  itemSize:'',
  price:'',
  imageUrl:'',
  category:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_ITEMS_FORM":
      return action.formData
    case "CLEAR_NEW_ITEMS_FORM":
      return initialState
    case "SET_ITEM_FORM_FOR_EDIT":
      return action.itemFormData
    default:
      return state

  }
}
