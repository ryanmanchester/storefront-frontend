import React from 'react';
import Button from '../styled-components/Button'
import { Link } from 'react-router-dom';
import Men from '../components/Men'


const Categories = ({ categories }) => {
  console.log(categories.categories)
  if (categories.isLoading && !categories.categories.length) {
    return (
      <div>
      <p>Loading...</p>
      </div>
    )
  } else {
    return (
     <div>{categories.categories.map(category =>
      <Link to={'/' + category.name}><Button  onClick={() => alert(`You clicked ${category.name}`)} key={category.id}>{category.name}</Button></Link>)}
     </div>
    )
  }

}



export default Categories
