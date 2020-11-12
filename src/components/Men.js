import React from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'
import Spinner from 'react-bootstrap/Spinner'


 const Men = ({ mens }) => {
   console.log(mens)
   if (mens.isLoading && !mens.items.count) {
     return (
       <Container>
         <h1>Mens Department</h1>
         <Spinner animation="border" />
       </Container>
     )
   } else {
     return (
       <Container>
        <h1>Men's Department</h1>
        <div>
        <CardColumns>
        {mens.items.map(item =>
          <ItemCard key={item.id} item={item} />
        )}
      </CardColumns>
        </div>
       </Container>
     )
   }
 }

export default Men
