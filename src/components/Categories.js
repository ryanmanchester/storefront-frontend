import React, { Component } from 'react';

import Men from '../components/Men'


class Categories extends Component {



  render() {
 console.log(this.props.categories)
    return (
      <div className="categoryName"><Men  /></div>
    )
  }
}



export default Categories
