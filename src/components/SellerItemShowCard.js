import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const SellerItemShowCard = ({items, match}) => {
console.log(items)
if (items) {
  const currentItem = items.find(item => item.id === match.params.id)
  console.log(currentItem)
  return (
        <Card className="bg-dark text-white">
      <Card.Img src={currentItem.attributes.image_url} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{currentItem.attributes.title}</Card.Title>
        <Card.Text>
          {currentItem.attributes.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
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
