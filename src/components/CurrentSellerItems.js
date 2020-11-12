import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, ButtonGroup, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SellerItemCard from '../components/SellerItemCard'
import { logout } from '../actions/currentSeller'
import Spinner from 'react-bootstrap/Spinner'


const CurrentSellerItems = ({ currentSeller, history, match }) => {

  if (currentSeller && currentSeller.included.length > 0){
    return (
      <Container>
      <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
      <h2>Here's what you're selling:</h2>
      <div>
        <CardColumns>
      {currentSeller.included.map(item =>
        <SellerItemCard key={item.id} id={item.id} item={item.attributes} match={match} />)}
          </CardColumns>
      </div>
      <ButtonGroup>
        <Link to={`/sellers/${currentSeller.data.id}/items/new`}><Button variant="light">Sell More Items</Button></Link>
      </ButtonGroup>
      </Container>
    )
  } else if (currentSeller && currentSeller.included.length === 0 ) {
    return (
      <Container>
        <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
        <h2>Looks like you're not selling anything right now</h2>
          <ButtonGroup>
              <Link to={`/sellers/${currentSeller.data.id}/items/new`}><Button variant="light">Start Selling Items</Button></Link>

          </ButtonGroup>
      </Container>
    )
  } else {
    return (
      <Spinner animation="border" />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentSeller: state.currentSeller
  }
}

export default connect(mapStateToProps)(CurrentSellerItems)
