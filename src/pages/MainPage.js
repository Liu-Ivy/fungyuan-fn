import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MainPage.css'

class MainPage extends Component {
  render() {
    return (
      <>
        <div className='info'>
          <h1>豐元企業有限公司</h1>
        </div>
         <div className='main-products'>
          <h1>All Product</h1>
          <Link to='/form'><button>See More</button></Link>
         </div>
      </>
    )
  }
}

export default MainPage;