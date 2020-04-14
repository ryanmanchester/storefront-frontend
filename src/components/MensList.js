import React, { Component } from 'react';
import { getMensItems } from '../actions/menActions';
import { connect } from 'react-redux';
import Men from '../components/Men';

class MensList extends Component {
  componentDidMount(){
    this.props.getMensItems();
  }


  render(){
    console.log(this.props.mens)
    return(
      <div><Men mens={this.props.mens} /></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mens: state.mens
  }
}

export default connect(mapStateToProps, { getMensItems })(MensList)
