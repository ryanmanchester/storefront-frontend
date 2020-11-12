import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard'

const Cart = ( {cart} ) => {
  if (!cart.items.length) {
    return (
      <Container>
        <Row className="justify-content-center">
            <h2>Your Cart is Empty</h2>
        </Row>
      </Container>
    )
  } else {
    let itemPrice = cart.items.map(item => item.attributes.price)
    return (
      <Container>
        <Row className="justify-content-center">
            <h2>Your Cart</h2>
        </Row>
        <div>{cart.items.map( item => <CartCard key={item.id} item={item} />)}</div>
        <p><strong>Total Price: </strong>${itemPrice.reduce((a,b) => a + b )}</p>
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