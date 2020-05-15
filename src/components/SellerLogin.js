import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button, Col } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';

const SellerLogin = () => {
  return (
  <HomeHeader>
    <h1>Welcome Back to StoreFront</h1>

    <h4> - Log In Below to Start Selling - </h4>
      <Form >
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control  name="name" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password" type="password" placeholder="Enter password" />
        </Form.Group>

        <Button  variant="dark" type="submit">Log In</Button>
      </Form>

    </HomeHeader>
  )
}

export default SellerLogin
