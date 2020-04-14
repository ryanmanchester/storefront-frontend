import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'
//import Button from '../styled-components/Button';


 const Men = ({ mens }) => {
   console.log(mens)
   if (mens.isLoading && !mens.items.count) {
     return (
       <Container>
         <h1>Mens Department</h1>
         <p>Loading...</p>
       </Container>
     )
   } else {
     return (
       <Container>
        <h1>Mens Department</h1>
        {mens.items.map(item =>
          <ItemCard key={item.id} item={item} />
        )}
       </Container>
     )
   }
 }

export default Men
