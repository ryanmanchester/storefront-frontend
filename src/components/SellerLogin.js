import React from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';
import { updateLoginForm } from '../actions/loginForm';

const SellerLogin = ({ loginForm, updateLoginForm }) => {

  const handleOnChange = (event) => {
    updateLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  }

  return (
  <HomeHeader>
    <h1>Welcome Back to StoreFront</h1>

    <h4> - Log In Below to Start Selling - </h4>
      <Form >
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleOnChange}  name="name" type="text" value={ loginForm.name } placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleOnChange}  name="password" type="password" value={ loginForm.password } placeholder="Enter password" />
        </Form.Group>

        <Button  variant="dark" type="submit">Log In</Button>
      </Form>

    </HomeHeader>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm })(SellerLogin)
