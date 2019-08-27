import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import product from '../lib/product-service.js';
import ProductCard from '../card/ProductCard';
import { Link } from "react-router-dom";
import orderList from '../lib/orderList-service';


class Product extends Component {
  state = {
    products:[],
  }

  componentDidMount() {
    product.getProduct(this.props.match.params.id)
    .then((products)=> {
      this.setState({products:products})
    })
  }

  showTitle() {
    return this.state.products[0] ? <h2 className="text-center">{this.state.products[0].category_id.title}</h2> : null
  }
  
  handleDelete = (productID) => {
    product.deleteProduct(productID)
    .then(()=>{
      const newProduct = this.state.products.filter(product => productID !== product._id)
      this.setState({
        products: newProduct
      })
    })
  }
  handleAdd = (productID) => {
    const oldOrderList = [...this.props.orderList]
    const newOrderList = [...oldOrderList, productID]
    this.props.setOrderList(newOrderList);
    const newUser = Object.assign({},this.props.user)
    newUser.orderList = newOrderList
    orderList.updatedOrderList(newUser)
  }
  handleRemove = (productID) => {
    const oldOrderList = [...this.props.orderList];
    const newOrderList = oldOrderList.filter(id => productID !== id)
    this.props.setOrderList(newOrderList);
    const newUser = Object.assign({},this.props.user)
    newUser.orderList = newOrderList
    orderList.updatedOrderList(newUser)
  }


  render() {
    return (
      <div>
        {this.showTitle()}
        {this.state.products.map((product) =>{
          return <ProductCard product={product} key={product._id} handleDelete={this.handleDelete} handleAdd={this.handleAdd} handleRemove={this.handleRemove}/>
        })}
        <div className="d-flex justify-content-end">
          <Link to="/category"><button className="btn btn-info" active="active">Go Back</button></Link>
        </div>
      </div>
    )
  }
}

export default withAuth(Product)