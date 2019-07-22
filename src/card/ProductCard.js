import React from 'react';


const style = {
  weight: '180px',
  height: '180px',
 }

function ProductCard(props) {
  const { name, img, description } = props.product;
  const addToCart = () => {
    //todo implement later
  }
  return (
    <div>
       <h3>{name}</h3>
       <img src={img} alt="" style={style}/>
       <p>{description}</p>
       <button onClick={addToCart}>Add To Order List +</button>
       
    </div>
  )
}

export default ProductCard
