import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MainPage extends Component {
  render() {
    return (
      <>
        <div className='info'>
          <h1>豐元企業有限公司</h1>
        </div>
         <div className='main-products'>
          <h1>Our Products</h1>
          <Link to='/form'><button>See More</button></Link>
         </div>
      </>
    )
  }
}

export default MainPage;