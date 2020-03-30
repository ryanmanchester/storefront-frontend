import styled from 'styled-components';
import StoreFrontBanner from '../assets/StoreFrontBanner.jpg';

const HomeHeader = styled.div`
  background-image: url(${StoreFrontBanner}) ;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`

export default HomeHeader
