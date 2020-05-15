import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';

class SellerSignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(event.target)
  }
  render(){
    return (
      <HomeHeader>
      <h1>Join the StoreFront Team</h1>

      <h4>Please sign up below</h4>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.handleOnChange} name="name" type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleOnChange} name="password" type="password" placeholder="Enter password" />
          </Form.Group>

          <Button  variant="dark" type="submit">Sign Up</Button>
        </Form>

      </HomeHeader>
    )
  }
}

export default SellerSignUp
