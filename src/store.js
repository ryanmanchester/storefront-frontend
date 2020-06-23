import React from 'react';
import { combineReducers } from 'redux';
import manageCart from './reducers/manageCart.js';
import categoriesReducer from './reducers/categoriesReducer';
import mensItemsReducer from './reducers/mensItemsReducer';
import womensItemsReducer from './reducers/womensItemsReducer';
import currentSeller from './reducers/currentSeller';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';

const reducer = combineReducers({
  cart: manageCart,
  categories: categoriesReducer,
  mens: mensItemsReducer,
  womens: womensItemsReducer,
  currentSeller,
  loginForm,
  signupForm
})

export default reducer
