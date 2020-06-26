import React from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentSeller';

const SellerLogin = ({ login, loginForm, updateLoginForm, history, match }) => {

  const handleOnChange = (event) => {
    updateLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    login(loginForm, history, match);

  }

  return (
  <HomeHeader>
    <h1>Welcome Back to StoreFront</h1>

    <h4> - Log In Below to Start Selling - </h4>
      <Form onSubmit={handleOnSubmit} >
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleOnChange}  name="name" type="text" value={ loginForm.name } placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleOnChange}  name="password" type="password" value={ loginForm.password } placeholder="Enter password" />
        </Form.Group>

        <Button  variant="dark" type="submit">Log In</Button>
        <p>New to StoreFront? <a href="/sellers/signup">Sign Up</a></p>
      </Form>

    </HomeHeader>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(SellerLogin)
