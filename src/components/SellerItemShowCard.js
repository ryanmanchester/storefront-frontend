import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { deleteItem } from '../actions/newItems'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const SellerItemShowCard = ({items, match, history, currentSeller, newItem, deleteItem }) => {
  if (items && newItem.item) {
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
         <Card.Subtitle>Size: {currentItem.attributes.size}</Card.Subtitle>
         <Card.Text>
           {currentItem.attributes.sold ? "Sold Out" : `Price: $${currentItem.attributes.price}`}
         </Card.Text>
         <Link to={`/sellers/${currentSeller.data.id}/items/${currentItem.id}/edit`}>
           <Button variant="secondary">
             Edit Item
           </Button>
         </Link>
         <Card.Link href="#">
           <Button onClick={() => deleteItem(currentItem, history)} variant="warning">
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
  } else if (newItem.length) {
    const currentNewItem = newItem[0]
      return (
        <Container style={ {width: "36rem"} }>
        <h1>{currentNewItem.name}</h1>
        <Card>
          <Card.Img variant="top" src={currentNewItem.image_url} style={ {width: '100%',
                                                              height: '36rem',
                                                              objectFit: 'cover'} } />
          <Card.Body>
           <Card.Title>{currentNewItem.description}</Card.Title>
           <Card.Subtitle>{currentNewItem.sold ? "Sold Out" : `$${currentNewItem.price}`}</Card.Subtitle>
             <Card.Link href={`/sellers/${currentSeller.data.id}/items/${currentNewItem.id}/edit`}>
               <Button variant="secondary">
                 Edit Item
               </Button>
             </Card.Link>
             <Card.Link href="#">
               <Button onClick={() => alert("Are you sure?")} variant="warning">
                 Delete Item
               </Button>
             </Card.Link>
           <Card.Link href={`/sellers/${currentSeller.data.id}/items`}>
             Back to {currentSeller.data.attributes.name}s shop
           </Card.Link>
         </Card.Body>
         </Card>
        </Container>
      )
    } else {
      return("Loading...")
    }
  }

export default connect(null, { deleteItem })(SellerItemShowCard)
