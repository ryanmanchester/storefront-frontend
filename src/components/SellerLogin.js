import React from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeHeader from '../styled-components/HomeHeader';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentSeller';

const SellerLogin = ({ login, loginForm, updateLoginForm, history }) => {

  const handleOnChange = (event) => {
    updateLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    login(loginForm, history);

  }

  return (
  <HomeHeader>
    <h1>Welcome Back to StoreFront</h1>

    <h4> - Please Log In Below - </h4>
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
        <p>New to StoreFront? <Link to="/sellers/signup">Sign Up</Link></p>
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
