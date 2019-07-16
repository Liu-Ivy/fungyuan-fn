import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./Navbar.css";


class Navbar extends Component {

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="navbar">
        {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <img src="./logo.png" alt="Logo"/>
            <Link to="/">Home</Link>
            <Link to="/form/login">Login</Link>
            <Link to="/form/singup">Signup</Link>
            <Link to="/">Logout</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
