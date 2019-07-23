import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';
import product from "../lib/product-service";

const style = {
  weight: '180px',
  height: '180px',
 }

class OrderList extends Component {
  state = {
    orderList: this.props.orderList,//from context
    productList: [],
  }
  componentDidMount() {
    for(let i = 0; i < this.state.orderList.length; i++) {
      product.getOneProduct(this.state.orderList[i])
      .then((product)=> {
        const productList = [...this.state.productList, product]
        this.setState({productList:productList})
      })
    }
  }
  render() {
    
    return (
      <div>
        My Order List
        <br/>
         {this.state.productList.map(product=>{
          const { name, img, description } = product;
           return (
            <div>
            <h3>{name}</h3>
            <img src={img} alt="" style={style}/>
            <p>{description}</p>
            </div>
           )
         })}
        <br/>
        <Link to="/category"><button>Go Back</button></Link>
      </div>
    )
  }
}

export default withAuth(OrderList)

