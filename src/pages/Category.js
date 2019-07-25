import React, { Component } from 'react';
import categoryService from '../lib/category-service';
import CategoryCard from '../card/CategoryCard';
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
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
    return (
      <>
      <div className="product-box">
        <h2 className="text-center">Our Products</h2>
        <div className="product">
        {this.state.categories.map((category)=>{
          return <CategoryCard category={category} key={category._id}/>
        })}
        <Link to="/addProduct">{this.props.user.username === "admin" ? 
        <div className="d-flex justify-content-end">
        <button className="btn btn-info mt-2" active="active" type="submit" value="submit">Add New Products</button></div> : null }</Link>
        </div>
      </div>
        {/* <div className="footer">
          <Footer/>
        </div> */}
      </>
    )
  }
}
export default withAuth(Category)

