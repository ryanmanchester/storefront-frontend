import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard';
import { clearCart } from '../actions/cart'

const Cart = ( {cart, clearCart} ) => {
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

        <Row className="align-items-start">
          <Col>
            <p className="text-right"><strong>Total Price: </strong>${itemPrice.reduce((a,b) => a + b )}</p>
            <Button  onClick={() => clearCart()} variant="light">Clear Cart</Button>
            <Button className="float-right" variant="info">Checkout</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {clearCart})(Cart)
