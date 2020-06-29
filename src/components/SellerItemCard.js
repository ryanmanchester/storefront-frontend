import React from'react'
import { Card } from 'react-bootstrap'

const SellerItemCard = ({item}) => {
  return (
    <Card  key={item.id}  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_url} style={ {width: '100%',
                                                            height: '18rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title>{item.name}</Card.Title>
       <Card.Subtitle>{item.sold ? "Sold Out" : `$${item.price}`}</Card.Subtitle>
       <Card.Text>
          {item.description}
       </Card.Text>
       <Card.Link href="#">Edit Item</Card.Link>
       <Card.Link href="#">Delete Item</Card.Link>
     </Card.Body>
     </Card>

  )
}

export default SellerItemCard
