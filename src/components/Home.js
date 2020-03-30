import React from 'react';
import Categories from '../components/Categories';
import styled from 'styled-components';
import StoreFrontBanner from '../assets/StoreFrontBanner.jpg';

 const Home = ({ categories }) => {
  return (
    <Header><h1>Welcome to StoreFront</h1>
    <Categories categories={categories} />
    </Header>

  )
}


const Header = styled.div`
  background-image: url(${StoreFrontBanner}) ;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`


export default Home
