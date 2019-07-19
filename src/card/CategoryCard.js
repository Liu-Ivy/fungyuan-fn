
import React from 'react';
import { Link } from "react-router-dom";

const style = {
  weight: '180px',
  height: '180px',
 }

function CategoryCard(props) {
  const { title, image, _id } = props.category
  console.log('image', image)
  return (
    <div className='category'>
      <Link to={`/category/${_id}`}>
        <img src={image} alt="category" style={style} />
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default CategoryCard

