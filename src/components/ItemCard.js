import React from'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

const ItemCard = ({ item, addToCart, cart}) => {
    return (
      <Card  key={item.id} style={{width : '18rem'}}>
        <Card.Img variant="top" src={item.attributes.image_url} style={ {width: '100%',
                                                              height: '18rem',
                                                              objectFit: 'cover'} } />
        <Card.Body>
         <Card.Title>{item.attributes.name}</Card.Title>
         <Card.Subtitle>{item.attributes.sold ? "Sold Out" : `$${item.attributes.price}`}</Card.Subtitle>
         <Button disabled={cart.items.includes(item)} onClick={ () => addToCart(item) }  variant="dark">Add to Cart</Button>
       </Card.Body>
       </Card>

    )


}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart })(ItemCard)
