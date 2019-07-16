import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email:"",
    phone:"",
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email, phone } = this.state;
    this.props.signup({ username, password, email, phone });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }; //[name]=input names below

  render() {
    const { username, password, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username" 
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>E-mail:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
