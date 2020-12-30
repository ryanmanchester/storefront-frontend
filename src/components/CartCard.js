import React from 'react';
import { Card, Button, Image} from 'react-bootstrap'
import { connect } from 'react-redux';
import { removeItem } from '../actions/cart'

const CartCard = ({item, removeItem}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img src={item.attributes.image_url} className="float-left" style={{width: "10rem", objectFit: "cover", height: "10rem"}}  />
        <Card.Subtitle className="text-center">{item.attributes.name}</Card.Subtitle>
        <Card.Text className="text-center">
          {item.attributes.description}
        </Card.Text>
        <Card.Text className="text-right">${item.attributes.price}</Card.Text>
         <Button onClick={ () => removeItem(item)} variant="light" className="float-right">
           Remove Item
         </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, {removeItem})(CartCard)
