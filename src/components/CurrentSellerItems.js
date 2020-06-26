import React from 'react'
import { connect } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ItemCard from '../components/ItemCard'
import { logout } from '../actions/currentSeller'

const CurrentSellerItems = ({ logout, currentSeller, history }) => {
  const handleOnClick = () => {
    logout(history)
  }

  if (currentSeller && currentSeller.included.length > 0){
    return (
      <Container>
      <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
      <h2>Here's what you're selling:</h2>
      {currentSeller.included.map(item => <ItemCard key={item.id} item={item.attributes} />)}
      <ButtonGroup>
        <Link to="/sellers/new-items"><Button variant="dark">Sell More Items</Button></Link>
        <Button variant="dark" onClick={handleOnClick}>Log Out</Button>
      </ButtonGroup>
      </Container>
    )
  } else if (currentSeller && currentSeller.included.length === 0 ) {
    return (
      <Container>
        <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
        <h2>Looks like you're not selling anything right now</h2>
          <ButtonGroup>
              <Link to="/new-items"><Button variant="dark">Start Selling Items</Button></Link>
            <Button variant="dark" onClick={handleOnClick}>Log Out</Button>
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
