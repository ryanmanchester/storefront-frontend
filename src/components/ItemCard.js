import React from'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

const ItemCard = ({ item, addToCart }) => {
  return (
    <Card  key={item.id}>
      <Card.Img variant="top" src={item.attributes.image_url} style={ {width: '100%',
                                                            height: '18rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title>{item.attributes.name}</Card.Title>
       <Card.Subtitle>{item.attributes.old ? "Sold Out" : `$${item.attributes.price}`}</Card.Subtitle>
       <Button onClick={ () => addToCart(item)} variant="dark">Add to Cart</Button>
     </Card.Body>
     </Card>

  )
}

export default connect(null, { addToCart })(ItemCard)
