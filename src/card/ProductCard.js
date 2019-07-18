import React from 'react';


function ProductCard(props) {
  const { name, img, description } = props.product
  return (
    <div>
       <h3>{name}</h3>
       <img src={img} alt=""/>
       <p>{description}</p>
       <button>+</button>
    </div>
  )
}

export default ProductCard
