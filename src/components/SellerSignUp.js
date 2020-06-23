import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentSeller';

const SellerSignUp = ({ signup, signupForm, updateSignupForm }) => {

  const handleOnChange = (event) => {
    updateSignupForm({
      ...signupForm,
      [event.target.name]: event.target.value
    })
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

    return (
      <HomeHeader>
      <h1>Join the StoreFront Team</h1>

      <h4>Please sign up below</h4>
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
