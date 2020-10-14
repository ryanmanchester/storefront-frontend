import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { deleteItem } from '../actions/newItems'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const SellerItemShowCard = ({itemsList, match, history, currentSeller, viewItem, deleteItem }) => {
  if (itemsList && viewItem.attributes) {
    return (
      <Container style={ {width: "36rem"} }>
      <h1>{viewItem.attributes.name}</h1>
      <h2>In viewItem "if" statement</h2>
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
           <Button variant="secondary">
             Edit Item
           </Button>
         </Link>
         <Card.Link href="#">
           <Button onClick={() => deleteItem(viewItem, history)} variant="warning">
             Delete Item
           </Button>
         </Card.Link>
         <Link to={`/sellers/${currentSeller.data.id}/items`}>
           Back to {currentSeller.data.attributes.name}s shop
         </Link>
       </Card.Body>
       </Card>
      </Container>
    )
  } else if (itemsList && !viewItem.attributes) {
    const currentNewItem =  itemsList.find(item => item.id.toString() === match.params.id)
      return (
        <Container style={ {width: "36rem"} }>
        <h1>{currentNewItem.name}</h1>
        <h2>In the "else if" statement</h2>
        <Card>
          <Card.Img variant="top" src={currentNewItem.image_url} style={ {width: '100%',
                                                              height: '36rem',
                                                              objectFit: 'cover'} } />
          <Card.Body>
           <Card.Title>{currentNewItem.description}</Card.Title>
           <Card.Subtitle>{currentNewItem.sold ? "Sold Out" : `$${currentNewItem.price}`}</Card.Subtitle>
             <Link to={`/sellers/${currentSeller.data.id}/items/${currentNewItem.id}/edit`}>
               <Button variant="secondary">
                 Edit Item
               </Button>
             </Link>
             <Card.Link href="#">
               <Button onClick={() => deleteItem(viewItem, history)} variant="warning">
                 Delete Item
               </Button>
             </Card.Link>
           <Link to={`/sellers/${currentSeller.data.id}/items`}>
             Back to {currentSeller.data.attributes.name}s shop
           </Link>
         </Card.Body>
         </Card>
        </Container>
      )
    } else {
      return("Loading...")
    }
  }

export default connect(null, { deleteItem })(SellerItemShowCard)
