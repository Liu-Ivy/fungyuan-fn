
import React from 'react'
import {Link} from 'react-router-dom';


const style = {
  weight: '180px',
  height: '180px',
 }


function CategoryCard(props) {
  
  return (
    <div className='category'>
      <Link to={`/category/${props.category}`}><img src={`${props.image}`} alt="category" style={style} /></Link>
      <p>{props.category}</p>
    </div>
  )
}

export default CategoryCard

