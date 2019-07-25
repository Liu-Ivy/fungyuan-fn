
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const style = {
  weight: '200px',
  height: '200px',
 }

function CategoryCard(props) {
  const { title, image, _id } = props.category
  // console.log('image', image)
  return (
    <div className='category'>
      <Link to={`/category/${_id}`}>
        <img className="shrink mb-3"src={image} alt="category" style={style} />
        <h3 className="text-center">{title}</h3>
      </Link>
    </div>
  )
}

export default CategoryCard

