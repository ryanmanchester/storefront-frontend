import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { deleteItem } from '../actions/newItems'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const SellerItemShowCard = ({itemsList, match, history, currentSeller, viewItem, deleteItem }) => {
  if (itemsList && viewItem) {
    return (
      <Container style={ {width: "36rem"} }>
      <h1>{viewItem.attributes.name}</h1>
      <Card>
        <Card.Img variant="top" src={viewItem.attributes.image_url} style={ {width: '100%',
                                                            height: '36rem',
                                                            objectFit: 'cover'} } />
        <Card.Body>
         <Card.Title>{viewItem.attributes.description}</Card.Title>
         <Card.Subtitle>Size: {viewItem.attributes.size}</Card.Subtitle>
         <Card.Text>
           {viewItem.attributes.sold ? "Sold Out" : `Price: $${viewItem.attributes.price}`}
         </Card.Text>
         <Link to={`/sellers/${currentSeller.data.id}/items/${viewItem.id}/edit`}>
           <Button variant="info">
             Edit Item
           </Button>
         </Link>
         <Card.Link href="#">
           <Button onClick={() => deleteItem(viewItem, history)} variant="danger">
             Delete Item
           </Button>
         </Card.Link>
         <Link to={`/sellers/${currentSeller.data.id}/items`}>
          <Button variant="dark">Back to {currentSeller.data.attributes.name}s shop</Button>
         </Link>
       </Card.Body>
       </Card>
      </Container>
    )
  }
     else {
      return("Loading...")
    }
  }

export default connect(null, { deleteItem })(SellerItemShowCard)
