import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, ButtonGroup, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SellerItemCard from '../components/SellerItemCard'
import { logout } from '../actions/currentSeller'

const CurrentSellerItems = ({ logout, currentSeller, history, match }) => {
  const handleOnClick = () => {
    logout(history)
  }

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
        <Link to="/new-items"><Button variant="light">Sell More Items</Button></Link>
        <Button variant="light" onClick={handleOnClick}>Log Out</Button>
      </ButtonGroup>
      </Container>
    )
  } else if (currentSeller && currentSeller.included.length === 0 ) {
    return (
      <Container>
        <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
        <h2>Looks like you're not selling anything right now</h2>
          <ButtonGroup>
              <Link to="/new-items"><Button variant="light">Start Selling Items</Button></Link>
            <Button variant="light" onClick={handleOnClick}>Log Out</Button>
          </ButtonGroup>
      </Container>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentSeller: state.currentSeller
  }
}

export default connect(mapStateToProps, { logout })(CurrentSellerItems)
