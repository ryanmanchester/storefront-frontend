import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentSeller';

const SellerSignUp = ({ signup, signupForm, updateSignupForm, history }) => {

  const handleOnChange = (event) => {
    updateSignupForm({
      ...signupForm,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    signup(signupForm, history)
  }

    return (
      <HomeHeader>
      <h1>Join the StoreFront Team</h1>

      <h4>- Sign Up Below and Start Selling -</h4>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleOnChange} name="name" type="text" value={signupForm.name} placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleOnChange} name="password" type="password" value={signupForm.password} placeholder="Enter password" />
          </Form.Group>

          <Button  variant="dark" type="submit">Sign Up</Button>
          <p>Already a seller? <a href="/sellers/login">Log In</a></p>
        </Form>

      </HomeHeader>
    )
}

const mapStateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(SellerSignUp)
