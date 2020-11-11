import React from 'react';
import Button from '../styled-components/Button'
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'



const Categories = ({ categories }) => {
  if (categories.isLoading && !categories.list.length) {
    return (
      <Spinner animation="border" />
    )
  } else {
    return (
     <div>{categories.list.map(category =>
      <Link key={category.id} to={'/' + category.attributes.name.toLowerCase()}>
        <Button>{category.attributes.name}</Button>
      </Link>)}
     </div>
    )
  }

}



export default Categories
