import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './actions/categoryActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Men from './components/Men'




 class App extends Component {
   componentDidMount = () => {
     this.props.getCategories()
   }
   
  render(){
    console.log(this.props.categories.categories)
    return (
      <div className="App">
      <NavigationBar />
      <Router >
        <Switch>
          <Route exact path="/" render={()=> <Home categories={this.props.categories} />} />
          <Route exact path="/Men" component={Men} />
        </Switch>
      </Router>

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
