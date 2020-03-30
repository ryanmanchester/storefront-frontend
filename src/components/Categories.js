import React from 'react';
import Button from '../styled-components/Button'

import Men from '../components/Men'


const Categories = ({ categories }) => {
  console.log(categories.categories)
  if (categories.isLoading && categories.categories.length === 0) {
    return (
      <div>
      <p>Loading...</p>
      </div>
    )
  } else {
    return (
     <div>{categories.categories.map(category => <Button key={category.id}>{category.name}</Button>)}</div>
    )
  }

}



export default Categories
