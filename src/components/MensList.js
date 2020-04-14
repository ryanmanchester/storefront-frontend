import React, { Component } from 'react';
import { getMensItems } from '../actions/menActions';
import { connect } from 'react-redux';
import Men from '../components/Men';

class MensList extends Component {
  componentDidMount(){
    this.props.getMensItems();
  }

  
  render(){
    console.log(this.props.mensItems)
    return(
        <div><Men mensItems={this.props.mensItems} /></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mensItems: state.mensItems
  }
}

export default connect(mapStateToProps, { getMensItems })(MensList)
