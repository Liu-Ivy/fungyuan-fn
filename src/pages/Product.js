import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import product from '../lib/product-service.js';
import ProductCard from '../card/ProductCard';
import { Link } from "react-router-dom";
import orderList from '../lib/orderList-service';
import Footer from "../components/Footer";


class Product extends Component {
  state = {
    products:[],
  }

  componentDidMount() {
    // console.log('this.props', this.props)
    product.getProduct(this.props.match.params.id)
    .then((products)=> {
      console.log('this.state2', this.state)
      this.setState({products:products})
    })
  }

  showTitle() {
    return this.state.products[0] ? <h2 className="text-center">{this.state.products[0].category_id.title}</h2> : null
  }
  
  handleDelete = (productID) => {
    console.log('this.state', this.state)
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
    const newOrderList = [...oldOrderList, productID]//this.props.orderList -- from context
    console.log('addList',newOrderList)
    this.props.setOrderList(newOrderList);//updated orderList in context
    const newUser = Object.assign({},this.props.user)//get user without reference
    newUser.orderList = newOrderList
    orderList.updatedOrderList(newUser)
  }
  handleRemove = (productID) => {
    const oldOrderList = [...this.props.orderList];
    const newOrderList = oldOrderList.filter(id => productID !== id)
    console.log('remove',newOrderList)
    this.props.setOrderList(newOrderList);//updated orderList in context
    const newUser = Object.assign({},this.props.user)//get user without reference
    newUser.orderList = newOrderList
    orderList.updatedOrderList(newUser)
  }


  render() {
    // const { username } = this.props.user.username
    // console.log('this.props', this.props)
    // console.log('this.props.user.username', this.props.user.username)
    console.log('this.state', this.state)
    return (
      <div>
        {this.showTitle()}
        {this.state.products.map((product) =>{
          console.log('product', product)
          return <ProductCard product={product} key={product._id} handleDelete={this.handleDelete} handleAdd={this.handleAdd} handleRemove={this.handleRemove}/>
        })}
        <div className="d-flex justify-content-end">
          <Link to="/category"><button className="btn btn-info" active="active">Go Back</button></Link>
        </div>
        <div>
          <Footer className="footer"/>
        </div>
      </div>
    )
  }
}

export default withAuth(Product)