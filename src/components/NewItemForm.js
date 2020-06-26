import React from 'react'
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { Container, Button, Row} from 'react-bootstrap';
import { updateNewItemsForm } from '../actions/newItemsForm';

const NewItemForm = ( { newItemsForm, updateNewItemsForm }) => {

  const handleOnChange = (event) => {
    updateNewItemsForm({
      ...newItemsForm,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    alert("Submit")
  }

  return (
    <Container>
    <h1>Enter your item below</h1>
    <Form onSubmit={handleOnSubmit}>
    <Form.Group as={Row} controlId="formGroupName">
      <Form.Label>Item name</Form.Label>
      <Form.Control onChange={handleOnChange}  name="name" type="text"  placeholder="Enter item name" />

      <Form.Label>Item description</Form.Label>
      <Form.Control onChange={handleOnChange} name="description" type="text-area" placeholder="Tell us about your item" />

      <Form.Label>Item size</Form.Label>
      <Form.Control onChange={handleOnChange} name="size" type="text"  placeholder="Enter item size" />

      <Form.Label>Item price</Form.Label>
      <Form.Control onChange={handleOnChange} name="price" type="number" placeholder="Item price" />

      <Form.Label>Item Image</Form.Label>
      <Form.Control onChange={handleOnChange}  name="imageUrl" type="text"  placeholder="URL for item's image" />

      <Form.Label>Select a Department</Form.Label>
      <Form.Control onChange={handleOnChange} name="category" as="select">
        <option selected value="" />
        <option value="Men">Men's</option>
        <option value="Women">Women's</option>
        <option value="Accessories">Accessories</option>
      </Form.Control>
      </Form.Group>
      <Button  variant="dark" type="submit">Sell New Item</Button>
    </Form>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    newItemsForm: state.newItemsForm
  }
}


export default connect(mapStateToProps, {updateNewItemsForm})(NewItemForm)
