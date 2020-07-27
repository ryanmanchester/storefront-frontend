import React from 'react';
import { Card } from 'react-bootstrap';

const SellerItemShowCard = ({item}) => {
  console.log(item)
  return (
    <div>Sellers Item Show Page</div>
//     <Card className="bg-dark text-white">
//   <Card.Img src={item.image_url} alt="Card image" />
//   <Card.ImgOverlay>
//     <Card.Title>{item.title}</Card.Title>
//     <Card.Text>
//       {item.description}
//     </Card.Text>
//   </Card.ImgOverlay>
// </Card>
  )
}

export default SellerItemShowCard
