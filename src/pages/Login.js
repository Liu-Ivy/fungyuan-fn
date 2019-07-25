import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { username, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label for="labelUsername">Username:</label>
            <input
              className="form-control"
              id="labelUsername"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            </div>
            <div className="form-group">
            <label for="labelPassword">Password:</label>
            <input
              className="form-control"
              id="labelPassword"
              placeholder="Passwprd"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-info" active="active" type="submit" value="Login">Login</button>
            </div>
        </form>
      </>
    );
  }
}

export default withAuth(Login);
