import React from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'
import Spinner from 'react-bootstrap/Spinner'


const Women = ({ womens }) => {

  if (womens.isLoading && !womens.items.count) {
    return (
      <Container>
        <h1>Womens Department</h1>
        <Spinner animation="border" />
      </Container>
    )} else {
      return (
        <Container>
         <h1>Women's Department</h1>
         <CardColumns>
         {womens.items.map(item =>
           <ItemCard key={item.id} item={item} />
         )}
       </CardColumns>
        </Container>

      )
    }
  }


export default Women
