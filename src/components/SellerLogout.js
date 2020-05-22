import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import HomeHeader from '../styled-components/HomeHeader';
import { logout } from '../actions/currentSeller';

const Logout = ( { logout }) => {
  return (
    <HomeHeader>
    <h1> Are You Sure You Want to Log Out?</h1>
    <Form onSubmit={logout}>
      <Button  variant="dark" type="submit">Log Out</Button>
    </Form>
    </HomeHeader>
  )
}

export default connect(null, { logout })(Logout)
