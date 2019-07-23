import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


const style = {
  weight: '50px',
  height: '50px',
 }

class Navbar extends Component {

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="navbar">
        {isLoggedin ? (
          <>
            <Link to="/">Home</Link>
            <p> Welcome: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <img src="./images/logo.png" alt="Logo" style={style}/>
            <Link to="/">Home</Link>
            <Link to="/form/login">Login</Link>
            <Link to="/form/singup">Signup</Link>
           
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
