import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import product from '../lib/product-service.js';
import ProductCard from '../card/ProductCard';
import { Link } from "react-router-dom";


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
    return this.state.products[0] ? <h1>{this.state.products[0].category_id.title}</h1> : null
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
          return <ProductCard product={product} key={product._id} handleDelete={this.handleDelete} />
        })}
        <Link to="/category"><button>Go Back</button></Link>
      </div>
    )
  }
}

export default withAuth(Product)