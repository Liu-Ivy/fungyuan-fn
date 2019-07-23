import React from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";

const style = {
  weight: '180px',
  height: '180px',
 }

function ProductCard(props) {
  
  const { name, img, description } = props.product;
  console.log('props', props)
  const addToCart = () => {
    //todo implement later
  }

  return (
    <div>
       <h3>{name}</h3>
       <img src={img} alt="" style={style}/>
       <p>{description}</p>
       {props.user.username === "admin" ? <button onClick={()=>{props.handleDelete(props.product._id)}}>Delete</button> : <button onClick={addToCart}>Add To Order List +</button>}
      
       
    </div>
  )
}

export default withAuth(ProductCard)
