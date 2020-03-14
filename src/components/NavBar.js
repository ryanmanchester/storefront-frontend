import React, {Component} from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories.js'

 class NavBar extends Component {
  render() {
    console.log(this.props.categories)
    return (
      <div>
        <Categories />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(NavBar)
