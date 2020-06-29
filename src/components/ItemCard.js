import React from'react'
import { Card, Button } from 'react-bootstrap'

const ItemCard = ({item}) => {
  return (
    <Card  key={item.id}  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.attributes.image_url} style={ {width: '100%',
                                                            height: '18rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title>{item.attributes.name}</Card.Title>
       <Card.Subtitle>{item.attributes.old ? "Sold Out" : `$${item.attributes.price}`}</Card.Subtitle>
       <Card.Text>
          {item.attributes.description}
       </Card.Text>
       <Button variant="dark">Add to Cart</Button>
     </Card.Body>
     </Card>

  )
}

export default ItemCard
