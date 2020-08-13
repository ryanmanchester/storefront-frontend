import React from 'react'
import { Container, CardColumns } from 'react-bootstrap';
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
          <h1>Women's Department</h1>
          <div>
            <CardColumns>
          {womens.items.map(item =>
             <ItemCard key={item.id} item={item} />
          )}
            </CardColumns>
          </div>
        </Container>

      )
    }
  }


export default Women
