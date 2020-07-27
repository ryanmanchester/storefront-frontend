import React from'react'
import { Card } from 'react-bootstrap'

const SellerItemCard = ({id, item, match}) => {
console.log(id)
console.log(match.params.id)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_url} style={ {width: '100%',
                                                            height: '18rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title><Card.Link href={`/sellers/${match.params.id}/items/${id}`}>{item.name}</Card.Link></Card.Title>
       <Card.Subtitle>{item.sold ? "Sold Out" : `$${item.price}`}</Card.Subtitle>

       <Card.Link href="#">Edit Item</Card.Link>
       <Card.Link href="#">Delete Item</Card.Link>
     </Card.Body>
     </Card>

  )
}

export default SellerItemCard
