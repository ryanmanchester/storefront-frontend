import React, {Component} from 'react';
import { getCategories } from '../actions/categoryActions';
import { connect } from 'react-redux';
import Categories from '../components/Categories.js'


 class NavBar extends Component {

   componentDidMount() {
     this.props.getCategories()
   }

  render() {
  console.log(this.props.categories)
    return (
      <div>
        <Categories categories={this.props.categories} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
