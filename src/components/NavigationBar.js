import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../actions/currentSeller';

 const NavigationBar = ( { currentSeller, logout } ) => {
  if (currentSeller){
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand>StoreFront</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href={`/sellers/${currentSeller.data.id}/items`}>{currentSeller.data.attributes.name}s Shop</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
        </Navbar.Collapse>

      </Navbar>
    )
  } else {
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand>StoreFront</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/sellers/signup">Seller Portal</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
        </Navbar.Collapse>

      </Navbar>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentSeller: state.currentSeller
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar)
