import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, HashRouter } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { logout } from '../actions/currentSeller';

 const NavigationBar = ( { currentSeller, logout } ) => {
  if (currentSeller){
    console.log("current seller from Nav Bar is", currentSeller)
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand>StoreFront</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <NavLink to="/"><Button variant="light">Home</Button></NavLink>
            <NavLink to={`/sellers/${currentSeller.data.id}/items`}><Button variant="light">{currentSeller.data.attributes.name}s Shop</Button></NavLink>
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
            <NavLink to="/cart"><Button variant="light">Cart</Button></NavLink>
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
