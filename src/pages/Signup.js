import React, { Component } from "react";
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
      <>
        <div>
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
            <div className="form-group">
              <label for="labelE-mail">E-mail:</label>
              <input
                className="form-control"
                id="labelE-mail"
                placeholder="E-mail"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="labelPhone">Phone:</label>
              <input
                className="form-control"
                id="labelPhone"
                placeholder="Phone"
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-info" active="active" type="submit" value="Signup">Signup</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withAuth(Signup);
