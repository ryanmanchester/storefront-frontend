import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { removeItem } from '../actions/cart'

const CartCard = ({item, removeItem}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Subtitle>{item.attributes.name}</Card.Subtitle>
        <Card.Text>
          {item.attributes.description}
        </Card.Text>
        <Card.Text>${item.attributes.price}</Card.Text>
         <Button onClick={ () => removeItem(item)} variant="light">
           Remove Item
         </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, {removeItem})(CartCard)
