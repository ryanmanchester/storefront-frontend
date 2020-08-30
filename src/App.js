import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import MensList from './components/MensList';
import WomensList from './components/WomensList';
import SellerSignUp from './components/SellerSignUp';
import SellerLogin from './components/SellerLogin';
import SellerItemShowCard from './components/SellerItemShowCard';
import { getCurrentSeller } from './actions/currentSeller';
import CurrentSellerItems from './components/CurrentSellerItems';
import NewItemForm from './components/NewItemForm';
import NewItemsFormWrapper from './components/NewItemsFormWrapper';
import EditItemFormWrapper from './components/EditItemFormWrapper';

 class App extends Component {

  componentDidMount() {
    this.props.getCurrentSeller()
  }

  render(){
    return (
      <div className="App">
      <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={MensList} />
          <Route exact path="/women" component={WomensList} />
          <Route exact path="/sellers/login" component={SellerLogin} />
          <Route exact path="/sellers/signup" component={SellerSignUp} />
          <Route exact path="/sellers/:id/items" component={CurrentSellerItems} />
          <Route exact path="/sellers/:id/items/:id" render={ (props) => {
              return <SellerItemShowCard {...props}
                       currentSeller={this.props.currentSeller}
                       items={this.props.items}
                       newItem={this.props.newItem} />
            }
          }/>
        <Route exact path="/new-items" component={NewItemsFormWrapper} />
          <Route exact path="/sellers/:id/items/:id/edit" render={ props => {
              return <EditItemFormWrapper {...props} currentSeller={this.props.currentSeller} items={this.props.items} />
            }} />

        </Switch>

    </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentSeller: state.currentSeller,
    items: state.currentSeller.included,
    newItem: state.newItem
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentSeller })(App))
