import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWomensItems } from '../actions/womenActions';
import Women from '../components/Women';

class WomensList extends Component {

  componentDidMount() {
    this.props.getWomensItems()
  }

  
  render(){
    return (
      <h1>Womens' Department</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    womensItems: state.womensItems
  }
}

export default connect(mapStateToProps, { getWomensItems })(WomensList)
