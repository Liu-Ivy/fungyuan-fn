import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

const style = {
  weight: '180px',
  height: '180px',
 }



class ProductCard extends Component {
  
  handleSwitch=()=>{
    console.log('this.props.orderList', this.props.orderList)
    if (this.props.orderList && this.props.orderList.includes(this.props.product._id)){
      return <button onClick={()=>{this.props.handleRemove(this.props.product._id)}}>Remove -</button>
    } else {
      return <button onClick={()=>{this.props.handleAdd(this.props.product._id)}}>Add To Order List +</button>
    }
  }

  render() {
    const { name, img, description } = this.props.product;
    console.log('this.props', this.props)
    return (
      <div>
        <h3>{name}</h3>
        <img src={img} alt="" style={style}/>
        <p>{description}</p>
        {this.props.user.username === "admin" ? 
          <button onClick={()=>{this.props.handleDelete(this.props.product._id)}}>Delete</button> : 
          this.handleSwitch(this.props)
        } {/*this.props from parents-Product*/}
      </div>
    )
  }
}

export default withAuth(ProductCard)
