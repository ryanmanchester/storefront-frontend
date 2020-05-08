import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';

const SellerSignUp = () => {
  return (
    <HomeHeader>
    <h1>Welcome to the StoreFront Team!</h1>

    <h4>Please sign up below</h4>
      <Form>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the seller's name" />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button  variant="dark" type="submit">Sign Up</Button>
      </Form>

    </HomeHeader>
  )
}

export default SellerSignUp
