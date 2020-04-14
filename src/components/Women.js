import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'

const Women = ({ womensItems }) => {
  console.log(womensItems)
  if (womensItems.isLoading && !womensItems.womensItems.count) {
    return (
      <Container>
        <h1>Womens Department</h1>
        <p>Loading...</p>
      </Container>
    )} else {
      return (
        <Container>
          <h1>Womens Department</h1>
          {womensItems.womensItems.map(item =>
            <ItemCard item={item} />
          )}
        </Container>
      )
    }
  }


export default Women
