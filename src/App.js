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

export default withRouter(connect(mapStateToProps, { getCurrentSeller })(App))
