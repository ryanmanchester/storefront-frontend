import React from'react'
import { Card, Button } from 'react-bootstrap'

const ItemCard = ({item}) => {
  return (
    <Card key={item.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_url} />
      <Card.Body>
       <Card.Title>{item.name}</Card.Title>
       <Card.Subtitle>{item.sold ? "Sold Out" : `$${item.price}`}</Card.Subtitle>
       <Card.Text>
          {item.description}
       </Card.Text>
       <Button variant="dark">Add to Cart</Button>
     </Card.Body>
     </Card>
  )
}

export default ItemCard
