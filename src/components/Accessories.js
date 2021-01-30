import React from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import ItemCard from '../components/ItemCard'
import Spinner from 'react-bootstrap/Spinner'


 const Accessories = ({ accessories }) => {
   console.log(accessories)
   if (accessories.isLoading && !accessories.items.count) {
     return (
       <Container>
         <h1>Accessories</h1>
         <Spinner animation="border" />
       </Container>
     )
   } else {
     return (
       <Container>
        <h1>Accessories</h1>
        <div>
        <CardColumns>
        {accessories.items.map(item =>
          <ItemCard key={item.id} item={item} />
        )}
      </CardColumns>
        </div>
       </Container>
     )
   }
 }

export default Accessories
