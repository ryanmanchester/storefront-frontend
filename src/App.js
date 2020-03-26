import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './actions/categoryActions';
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js';
import Categories from './components/Categories';

 class App extends Component {
   componentDidMount = () => {
     this.props.getCategories()
   }
  render(){
    console.log(this.props.categories.categories)
    return (
      <div className="App">
        <nav><NavBar /></nav>
        <header className="App-header">
          <h1>Welcome to StoreFront</h1>
          <Categories categories={this.props.categories} />
        </header>
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
