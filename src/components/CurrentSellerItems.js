import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ItemCard from '../components/ItemCard'

const CurrentSellerItems = ({ currentSeller }) => {
  if (currentSeller){
    console.log(currentSeller.included)
    return (
      <Container>
      <h1>Welcome Back {currentSeller.data.attributes.name}</h1>
      <h2>Here's what you're selling:</h2>
      {currentSeller.included.map(item => <ItemCard key={item.id} item={item.attributes} />)}
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

export default connect(mapStateToProps)(CurrentSellerItems)