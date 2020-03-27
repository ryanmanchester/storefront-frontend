import React from 'react';
import styled from 'styled-components'

import Men from '../components/Men'

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid black;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`
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
