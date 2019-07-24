import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const style = {
  weight: '40px',
  height: '40px',
 }

class Nav extends Component {

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <>
        <div className="jumbotron m-1 p-2" >
          <h1 className="font-weight-bold">FUNGYUAN  豐元企業有限公司</h1>
          <h3>The Best Grinding Wheel Wholesaler</h3>
        </div>
        <div className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"  >
         {isLoggedin ? 
         ( 
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src="./images/logo.png" alt="Logo" style={style}/>
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <p> Welcome: {user.username}</p>
            </li>
            <li className="nav-item">
              <button onClick={logout}>Logout</button>
            </li>
            <li className="nav-item">
              <Link to="/orderList"><button>My Order</button></Link>  
            </li>
          </ul> 
          ) : 
          (
            <>
          <img src="../images/logo.png" alt="Logo" style={style}/>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target"> 
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapse_target">
              <ul className="navbar-nav">
                <li className="nav-item" style={{margin: "20px"}}>
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item" style={{margin: "20px"}}>
                  <Link to="/form/login">Login</Link>
                </li>
                <li className="nav-item" style={{margin: "20px"}}>
                  <Link to="/form/singup">Signup</Link>
                </li>
              </ul>
            </div>
            </>
          )}
          </div>
          <img src="../images/background wheels.jpg" alt="" className="img-fluid" style={{width: "100%", height: "200px"}} />
      </>
    );
  }
}

export default withAuth(Nav);
