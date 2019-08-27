import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const style = {
  width: '60%',
  margin: 'auto',
 
}

class MainPage extends Component {

  render() {
    return (
      <>
        <div>
        <img src="../images/background wheels.jpg" alt="" className="img-fluid" style={{width: "100%", height: "250px"}} />
        </div>
         <div className="main-products">
          <h2 className="text-center mb-2">Our New Products</h2>
          <div id="carouselProducts" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="../images/mounted-points/point-2.jpeg" alt="" style={style}/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="../images/surface/surface-1.jpg" alt="" style={style}/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="../images/mounted-points/point-3.jpg" alt="" style={style}/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid img-center" src="../images/traditional/t-2.jpg" alt="" style={style}/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="../images/diamond-dresser/dresser-3.jpg" alt="" style={style}/>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselProducts" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-danger"></span>
            </a>
            <a className="carousel-control-next" href="#carouselProducts" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg-danger"></span>
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <Link to='/form'><button className="btn btn-info" active="active">See More</button></Link>
          </div>
         </div>
      </>
    )
  }
}

export default withAuth(MainPage);