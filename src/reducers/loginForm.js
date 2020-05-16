 export default (state = {name: '', password: ''}, action) => {
   switch (action.type) {
     case "UPDATE_LOGIN_FORM":
       return action.formData

     default:
       return state
   }

}
