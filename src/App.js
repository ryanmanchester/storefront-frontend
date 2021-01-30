import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Order from './components/Order';
import AccessoriesList from './components/AccessoriesList'
import MensList from './components/MensList';
import WomensList from './components/WomensList';
import SellerSignUp from './components/SellerSignUp';
import SellerLogin from './components/SellerLogin';
import SellerItemShowCard from './components/SellerItemShowCard';
import { getCurrentSeller } from './actions/currentSeller';
import {getCurrentCart} from './actions/cart'
import CurrentSellerItems from './components/CurrentSellerItems';
import NewItemsFormWrapper from './components/NewItemsFormWrapper';
import EditItemFormWrapper from './components/EditItemFormWrapper';
import Cart from './components/Cart';

 class App extends Component {

  componentDidMount() {
    this.props.getCurrentSeller()
    this.props.getCurrentCart()
  }

  render(){
    return (
      <div className="App">
      <NavigationBar history={this.props.history} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/men" component={MensList} />
          <Route exact path="/women" component={WomensList} />
          <Route exact path="/accessories" component={AccessoriesList} />
          <Route exact path="/sellers/login" component={SellerLogin} />
          <Route exact path="/sellers/signup" component={SellerSignUp} />
          <Route exact path="/sellers/:id/items" component={CurrentSellerItems} />
          <Route exact path="/sellers/:id/items/new" component={NewItemsFormWrapper} />
          <Route exact path="/sellers/:id/items/:id" render={ props => {
            if (this.props.items){
              const viewItem = this.props.items.find(item => item.id === props.match.params.id)
              return <SellerItemShowCard {...props}
                       currentSeller={this.props.currentSeller}
                      itemsList={this.props.items}
                      viewItem={viewItem} />
            }}}
            />

          <Route exact path="/sellers/:id/items/:id/edit" render={ props => {
              if (this.props.items){
                  const editItem = this.props.items.find(item => item.id === props.match.params.id)
                  return <EditItemFormWrapper {...props}
                    currentSeller={this.props.currentSeller}
                    items={this.props.items}
                    editItem={editItem}
                    />
              }


            }} />
          <Route exact path="/cart" component={Cart} />

        </Switch>

    </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentSeller: state.currentSeller,
    items: state.currentSeller.included,
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentSeller, getCurrentCart })(App))
