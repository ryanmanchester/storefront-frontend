import React from'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

class ItemCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isRated: false}
  }
   handleOnClick = () => {
     this.setState(state => ({
       isRated: !state.isRated
     }))
   }
   disableButton = () => {
    const inCart = this.props.cart.items.find(cartItem => cartItem.id === this.props.item.id)
    if (inCart) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <Card  key={this.props.item.id} style={{width : '18rem'}}>
        <Card.Img variant="top" src={this.props.item.attributes.image_url} style={ {width: '100%',
                                                              height: '18rem',
                                                              objectFit: 'cover'} } />
        <Card.Body>
         <Card.Title>{this.props.item.attributes.name}</Card.Title>
         <Card.Subtitle>{this.props.item.attributes.sold ? "Sold Out" : `$${this.props.item.attributes.price}`}</Card.Subtitle>
         <Button disabled={this.disableButton()} onClick={() => this.props.addToCart(this.props.item) }  variant="dark">Add to Cart</Button>
         <Button onClick={this.handleOnClick} variant="light">Rating: { this.state.isRated ? "👍" : " "  }  </Button>
       </Card.Body>
       </Card>

    )
  }



}

const mapStateToProps = state => {
  return {
    cart: state.cart

  }
}

export default connect(mapStateToProps, { addToCart })(ItemCard)
