import React, { Component } from 'react';
import { getCategories } from '../actions/categoryActions';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import HomeHeader from '../styled-components/HomeHeader';



  class Home extends Component  {

    componentDidMount(){
      this.props.getCategories()
    }


   render(){
     return (
       <HomeHeader>
       <h1><strong>Welcome to StoreFront</strong></h1>
       <h3>Shop by Department</h3>
       <Categories categories={this.props.categories} />
       </HomeHeader>

     )
   }

}

const mapStateToProps = state => {
  return {
   categories: state.categories
  }
}

export default connect(mapStateToProps, { getCategories })(Home)
