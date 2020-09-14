import React, { Component } from 'react';
import NewItemForm from './NewItemForm'
import { connect } from 'react-redux';
import { setItemFormForEdit } from '../actions/newItemsForm'
import { updateItem } from '../actions/newItems';

class EditItemFormWrapper extends Component {

   componentDidMount = () => {
     this.props.setItemFormForEdit(this.props.editItem)
   }

   handleOnSubmit = (event) => {
     const { newItemsForm, updateItem, editItem, history } = this.props
    event.preventDefault()
    updateItem({...newItemsForm, itemId: editItem.id}, history);
  }

  render() {
    if (this.props.items) {
      return (
        <NewItemForm history={this.props.history} handleOnSubmit={this.handleOnSubmit}  />
        )
    } else {
      return ("Loading...")
    }

  }
}

const mapStateToProps = state => {
  return {
    newItemsForm: state.newItemsForm
  }
}


export default connect(mapStateToProps, { updateItem, setItemFormForEdit })(EditItemFormWrapper)
