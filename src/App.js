import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';

 class App extends Component {
  render(){
    return (
      <div className="App">
        <nav><NavBar /></nav>
        <header className="App-header">
          <h1>Welcome to StoreFront</h1>
        </header>
      </div>
    )
  }

}

export default App;
