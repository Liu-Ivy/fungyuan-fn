import React, { Component } from 'react';
import categoryService from '../lib/category-service';
import CategoryCard from '../card/CategoryCard';
import { withAuth } from "../lib/AuthProvider";

import './Category.css';

class Category extends Component {
  state = {
    categories: [],
  }

  componentDidMount(){
    categoryService.getAll()
      .then((categories)=>this.setState({categories:categories}))

  }


  render() {
    console.log('this.props2', this.props)

    return (
      <div className="product-box">
        <h1>Our Products</h1>
        <div className="product">
        {this.state.categories.map((category)=>{
          console.log('category',category)
          return <CategoryCard category={category} key={category._id}/>
        })}
        </div>
      </div>
    )
  }
}
export default withAuth(Category)