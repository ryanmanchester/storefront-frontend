import React from 'react';
import Button from '../styled-components/Button'
import { Link } from 'react-router-dom';



const Categories = ({ categories }) => {
  if (categories.isLoading && !categories.list.length) {
    return (
      <div>
      <p>Loading...</p>
      </div>
    )
  } else {
    return (
     <div>{categories.list.map(category =>
      <Link key={category.id} to={'/' + category.name.toLowerCase()}>
        <Button>{category.name}</Button>
      </Link>)}
     </div>
    )
  }

}



export default Categories
