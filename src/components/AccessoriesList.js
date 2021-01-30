import React, { Component } from 'react';
import { getAccessories } from '../actions/accessoryActions';
import { connect } from 'react-redux';
import Accessories from '../components/Accessories';

class AccessoriesList extends Component {
  componentDidMount(){
    this.props.getAccessories();
  }


  render(){
    console.log(this.props.accessories)
    return(
      <div><Accessories accessories={this.props.accessories} /></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accessories: state.accessories
  }
}

export default connect(mapStateToProps, { getAccessories })(AccessoriesList)
