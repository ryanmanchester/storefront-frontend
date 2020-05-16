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
      <div><Women womens={this.props.womens} /></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    womens: state.womens
  }
}

export default connect(mapStateToProps, { getWomensItems })(WomensList)
