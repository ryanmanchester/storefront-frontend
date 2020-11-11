import React from 'react';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux';

const Cart = ( {cart} ) => {
  if (!cart.items.length) {
    return (
      <Container>
        <h2>Your Cart is Empty</h2>
      </Container>
    )
  } else {
    let itemPrice = cart.items.map(item => item.attributes.price)
    return (
      <Container>
        <h2>Your Cart</h2>
        <ul>
          {cart.items.map(item =>
          <li>{item.attributes.name} - {item.attributes.description} </li>)}
          </ul>
          <p><strong>Total Price:</strong> ${itemPrice.reduce( (a,b) => a + b)} </p>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
