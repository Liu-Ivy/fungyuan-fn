import React, { Component } from 'react';
import categoryService from '../lib/category-service';
import CategoryCard from '../card/CategoryCard';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

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
    // console.log('this.props2', this.props)
    // console.log('this.props.user.username', this.props.user.username)
    return (
      <div className="product-box">
        <h1>Our Products</h1>
        <div className="product">
        {this.state.categories.map((category)=>{
          return <CategoryCard category={category} key={category._id}/>
        })}
        <Link to="/addProduct">{this.props.user.username === "admin" ? <button>Add New Products</button> : null }</Link>
        </div>
      </div>
    )
  }
}
export default withAuth(Category)