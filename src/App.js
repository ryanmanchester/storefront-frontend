import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './actions/categoryActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
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
      <NavigationBar />
      <Home  categories={this.props.categories}/>
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
