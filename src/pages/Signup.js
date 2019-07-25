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
  }; 

  render() {
    const { username, password, email, phone } = this.state;
    return (
      <>
        <div>
          <form className="add-form " onSubmit={this.handleFormSubmit}>
            <div className="form-group text-center">
              <label for="labelUsername">Username:</label>
              <input
                className="form-control border border-secondary"
                id="labelUsername"
                placeholder="Username"
                type="text"
                name="username" 
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group text-center">
              <label for="labelPassword">Password:</label>
              <input
                className="form-control border border-secondary"
                id="labelPassword"
                placeholder="Passwprd"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group text-center">
              <label for="labelE-mail">E-mail:</label>
              <input
                className="form-control border border-secondary"
                id="labelE-mail"
                placeholder="E-mail"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group text-center">
              <label for="labelPhone">Phone:</label>
              <input
                className="form-control border border-secondary"
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
