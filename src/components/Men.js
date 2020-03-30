import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap';


 const Men = ({ mensItems }) => {
   if (mensItems.isLoading && !mensItems.mensItems.count) {
     return (
       <Container>
         <h1>Mens' Department</h1>
         <p>Loading...</p>
       </Container>
     )
   } else {
     return (
       <Container>
        <h1>Mens' Department</h1>
        {mensItems.mensItems.map(item =>
          <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image_url} />
            <Card.Body>
             <Card.Title>{item.name}</Card.Title>
             <Card.Subtitle>{"$" + item.price}</Card.Subtitle>
             <Card.Text>
                {item.description}
             </Card.Text>
             <Button variant="dark">Add to Cart</Button>
           </Card.Body>
           </Card>
        )}
       </Container>
     )
   }

}

export default Men
