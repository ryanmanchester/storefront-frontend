import React from 'react';
import NewItemForm from './NewItemForm'
import { connect } from 'react-redux';
import { newItems } from '../actions/newItems';

const NewItemsFormWrapper = ({ newItemsForm, newItems, history }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault()
    newItems(newItemsForm, history);
  }

  return (
    <NewItemForm history={history} handleOnSubmit={handleOnSubmit} />
  )
}

const mapStateToProps = state => {
  return {
    newItemsForm: state.newItemsForm
  }
}


export default connect(mapStateToProps, { newItems })(NewItemsFormWrapper)
