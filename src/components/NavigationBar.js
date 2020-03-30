import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

 const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" defaultActiveKey="/">
      <Navbar.Brand>StoreFront</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Become a Seller</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavigationBar
