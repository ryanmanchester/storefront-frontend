
import { combineReducers } from 'redux';
import accessoriesReducer from './reducers/accessoriesReducer'
import cart from './reducers/cart.js';
import categoriesReducer from './reducers/categoriesReducer';
import mensItemsReducer from './reducers/mensItemsReducer';
import womensItemsReducer from './reducers/womensItemsReducer';
import currentSeller from './reducers/currentSeller';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import newItemsForm from './reducers/newItemsForm';
import newItem from './reducers/newItem';

const reducer = combineReducers({
  cart,
  categories: categoriesReducer,
  mens: mensItemsReducer,
  womens: womensItemsReducer,
  accessories: accessoriesReducer,
  currentSeller,
  loginForm,
  signupForm,
  newItemsForm,
  newItem
})

export default reducer
