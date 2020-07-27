import React from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

const SellerItemShowCard = ({items, match}) => {
console.log(items)
if (items) {
  const currentItem = items.find(item => item.id === match.params.id)
  console.log(currentItem)
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
     </Card.Body>
     </Card>
    </Container>
  )
} else {
  return ("Loading...")
}


}

const mapStateToProps = state => {
  return {
    items: state.currentSeller.included
  }
}

export default connect(mapStateToProps)(SellerItemShowCard)
