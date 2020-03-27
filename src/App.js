import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './actions/categoryActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Home from './components/Home';
import Categories from './components/Categories';


 class App extends Component {
   componentDidMount = () => {
     this.props.getCategories()
   }
  render(){
    console.log(this.props.categories.categories)
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>StoreFront</Navbar.Brand>
        </Navbar>
        <Container>
              <Categories categories={this.props.categories} />
        </Container>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   categories: state.categories
  }
}

export default connect(mapStateToProps, { getCategories })(App);
