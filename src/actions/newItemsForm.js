export const updateNewItemsForm = (formData) => {
  return {
    type: "UPDATE_NEW_ITEMS_FORM",
    formData
  }
}

export const setItemFormForEdit = item => {
  const itemFormData = {
    name: item.attributes.name,
    description: item.attributes.description,
    price: item.attributes.price,
    itemSize: item.attributes.size,
    imageUrl: item.attributes.image_url,
    category: item.relationships.category.data.id
  }
  return {
    type: "SET_ITEM_FORM_FOR_EDIT",
    itemFormData
  }
}

export const clearItemForm = () => {
  return {
    type: "CLEAR_NEW_ITEMS_FORM"
  }
}



//async action creators
