import React, { Component } from 'react';
import category from '../lib/Category-service';
import CategoryCard from '../card/CategoryCard';
import './Category.css';

class Category extends Component {
  state = {
    category: [],
  }

  componentDidMount(){
    category.getAll()
      .then((category)=>this.setState({category:category}))
  }


  render() {
    return (
      <div className="product">
        <h1>Our Products</h1>
        {this.state.category.map((category)=>{
          return <CategoryCard category={category.title} image={category.image} key={category._id}/>
        })}
      </div>
    )
  }
}
export default Category