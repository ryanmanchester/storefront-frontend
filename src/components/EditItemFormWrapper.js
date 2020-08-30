import React, { Component } from 'react';
import NewItemForm from './NewItemForm'
import { connect } from 'react-redux';
import { updateItem } from '../actions/newItems';

class EditItemFormWrapper extends Component {

   handleOnSubmit = (event) => {
    event.preventDefault()
    updateItem(this.props.newItemsForm);
  }

  render() {
    const { items, history, match } = this.props
    if (items) {
      const editItem = items.find(item => item.id === match.params.id)
      console.log(editItem.attributes)
      return (
        <NewItemForm history={history} handleOnSubmit={this.handleOnSubmit} editItem={editItem} />
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


export default connect(mapStateToProps, { updateItem })(EditItemFormWrapper)
