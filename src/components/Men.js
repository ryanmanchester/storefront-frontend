import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'
//import Button from '../styled-components/Button';


 const Men = ({ mensItems }) => {
   if (mensItems.isLoading && !mensItems.mensItems.count) {
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
        {mensItems.mensItems.map(item =>
          <ItemCard item={item} />
        )}
       </Container>
     )
   }

}

export default Men
