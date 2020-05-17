import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import MensList from './components/MensList';
import WomensList from './components/WomensList';
import SellerSignUp from './components/SellerSignUp';
import SellerLogin from './components/SellerLogin';
import { getCurrentSeller } from './actions/currentSeller';

 class App extends Component {

  componentDidMount() {
    this.props.getCurrentSeller()
  }

  render(){
    return (
      <div className="App">
      <NavigationBar />
      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={MensList} />
          <Route exact path="/women" component={WomensList} />
          <Route exact path="/sellers/login" component={SellerLogin} />
          <Route exact path="/sellers/signup" component={SellerSignUp} />
        </Switch>
      </Router>

    </div>
    )
  }
}

export default connect(null, { getCurrentSeller })(App)
