import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { logout } from '../actions/currentSeller';

 const NavigationBar = ( { currentSeller, cart, logout, history } ) => {

   const handleOnClick = () => {
     logout(history)
   }

  if (currentSeller){
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand>StoreFront</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <NavLink to="/"><Button variant="light">Home</Button></NavLink>
            <NavLink to={`/sellers/${currentSeller.data.id}/items`}>
                <Button variant="light">{currentSeller.data.attributes.name}s Shop</Button>
            </NavLink>
            <Button variant="light" onClick={handleOnClick}>Log Out</Button>
        </Navbar.Collapse>

      </Navbar>
    )
  } else {
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand>StoreFront</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <NavLink  to="/"><Button variant="light">Home</Button></NavLink>
            <NavLink to="/sellers/signup"><Button variant="light">Seller Portal</Button></NavLink>
            <NavLink to="/cart"><Button variant="light">{`Cart(${cart.items.length})`}</Button></NavLink>
        </Navbar.Collapse>

      </Navbar>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentSeller: state.currentSeller,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar)
