import React from'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SellerItemCard = ({id, item, match}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_url} style={ {width: '100%',
                                                            height: '18rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title><Link to={`/sellers/${match.params.id}/items/${id}`}>{item.name}</Link></Card.Title>
       <Card.Subtitle>{item.sold ? "Sold Out" : `$${item.price}`}</Card.Subtitle>
     </Card.Body>
     </Card>

  )
}

export default SellerItemCard
