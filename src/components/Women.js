import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'

const Women = ({ womens }) => {

  if (womens.isLoading && !womens.items.count) {
    return (
      <Container>
        <h1>Womens Department</h1>
        <p>Loading...</p>
      </Container>
    )} else {
      return (
        <Container>
          <h1>Womens Department</h1>
          {womens.items.map(item =>
            <ItemCard key={item.id} item={item} />
          )}
        </Container>
      )
    }
  }


export default Women
