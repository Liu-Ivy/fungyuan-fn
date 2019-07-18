import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import product from '../lib/product-service.js';
import ProductCard from '../card/ProductCard';


class Product extends Component {
  state = {
    products:[]
  }

  componentDidMount(){
    console.log('this.props', this.props)
    product.getProduct(this.props.match.params.id)
    .then((products)=> {this.setState({products:products})})
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div>
        {this.state.products.map((product) =>{
          return <ProductCard product={product}/>
        })}
      </div>
    )
  }
}

export default withAuth(Product)