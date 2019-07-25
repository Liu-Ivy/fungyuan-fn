import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import './ProductCard.css';

const style = {
  weight: '180px',
  height: '180px',
 }

class ProductCard extends Component {
  handleSwitch=()=>{
    if (this.props.orderList && this.props.orderList.includes(this.props.product._id)){
      return <button onClick={()=>{this.props.handleRemove(this.props.product._id)}}>Remove -</button>
    } else {
      return <button onClick={()=>{this.props.handleAdd(this.props.product._id)}}>Add To Order List +</button>
    }
  }

  render() {
    const { name, img, description } = this.props.product;
    return (
      <div className="prodcut-card">
        <div>
          <h3 className="text-center">{name}</h3>
        </div>
        <div>
          <img src={img} alt="" style={style}/>
        </div>
        <div>
          <p className="text-center">{description}</p>
          {this.props.user.username === "admin" ? 
            <button onClick={()=>{this.props.handleDelete(this.props.product._id)}}>Delete</button> : 
            this.handleSwitch(this.props)
          } 
        </div>
      </div>
    )
  }
}

export default withAuth(ProductCard)
