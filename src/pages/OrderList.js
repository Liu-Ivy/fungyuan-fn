import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom';
import product from "../lib/product-service";
import '../card/ProductCard';

const style = {
  weight: '180px',
  height: '180px',
 }

class OrderList extends Component {
  state = {
    orderList: this.props.user.orderList,
    productList: [],
  }
  componentDidMount() {
    for(let i = 0; i < this.state.orderList.length; i++) {
      product.getOneProduct(this.state.orderList[i])
      .then((product)=> {
        const productList = [...this.state.productList, product]
        this.setState({productList:productList})
      })
    }
  }
  // componentDidUpdate(prevProps, prevState){
  //   console.log('this.props', this.props)
  //   console.log('this.state', this.state)
     
  // }
  render() {
    
    return (
      <div>
       <h2 className="text-center m-3">My Order List</h2>
        <br/>
         {this.state.productList.map(product=>{
          const { name, img, description } = product;
           return (
            <div className="prodcut-card">
            <h3>{name}</h3>
            <img src={img} alt="" style={style}/>
            <p>{description}</p>
            </div>
           )
         })}
         <div className="d-flex justify-content-end">
          <Link to="/category"><button className="btn btn-info" active="active" type="submit" value="goback">Go Back</button></Link>
        </div>
      </div>
    )
  }
}

export default withAuth(OrderList)

