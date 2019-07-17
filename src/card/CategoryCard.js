
import React from 'react'
// import {Link} from 'react-router-dom';



function CategoryCard(props) {
  return (
    <div>
      <img src={require(props.image)} alt="category" />
      <p>{props.category}</p>
    </div>
  )
}

export default CategoryCard

