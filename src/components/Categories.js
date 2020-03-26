import React from 'react';

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
     <div>{categories.categories.map(category => <p key={category.id}>{category.name}</p>)}</div>
    )
  }

}



export default Categories
