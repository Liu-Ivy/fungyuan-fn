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

  showTitle() {
    return this.state.products[0] ? <h1>{this.state.products[0].category_id.title}</h1> : null
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div>
        {this.showTitle()}
        {this.state.products.map((product) =>{
          return <ProductCard product={product}/>
        })}
      </div>
    )
  }
}

export default withAuth(Product)