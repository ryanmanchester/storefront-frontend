import React from 'react';
import { Card, Container } from 'react-bootstrap';

const SellerItemShowCard = ({items, match, currentSeller, newItem }) => {
console.log(items)
console.log(newItem)
if (items && newItem.item) {
  const currentItem = items.find(item => item.id === match.params.id)
  return (
    <Container style={ {width: "36rem"} }>
    <h1>{currentItem.attributes.name}</h1>
    <Card>
      <Card.Img variant="top" src={currentItem.attributes.image_url} style={ {width: '100%',
                                                            height: '36rem',
                                                            objectFit: 'cover'} } />
      <Card.Body>
       <Card.Title>{currentItem.attributes.description}</Card.Title>
       <Card.Subtitle>{currentItem.attributes.sold ? "Sold Out" : `$${currentItem.attributes.price}`}</Card.Subtitle>
       <Card.Link href="#">Edit Item</Card.Link>
       <Card.Link href="#">Delete Item</Card.Link>
       <Card.Link href={`/sellers/${currentSeller.id}/items`}>Back to {currentSeller.data.attributes.name}s shop</Card.Link>
     </Card.Body>
     </Card>
    </Container>
  )
} else if (newItem.length) {
  return (<h1>New Item Block</h1>)
}
else {
  console.log(newItem)
  return("Loading...")
}



}



export default SellerItemShowCard
