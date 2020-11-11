import React from 'react';
import Card from 'react-bootstrap/Card';

const CartCard = ({item}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Subtitle>{item.attributes.name}</Card.Subtitle>
        <Card.Text>
          {item.attributes.description}
        </Card.Text>
        <Card.Text>${item.attributes.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CartCard
