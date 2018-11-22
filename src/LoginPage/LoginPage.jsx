import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      message: null
    }
  }
  //Login request
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;
    axios.post('http://localhost:8080/api/v1/users/login', {
      email: email.value,
      password: password.value
    }).then((response) =>
      this.setState({
        message: 'Successfully logged!',
        error: null
      },
      localStorage.setItem('currentID',response.data.user._id),
      localStorage.setItem('token',response.data.token)
      )
    ).catch(() =>
      this.setState({
        error: 'Error',
        message: null
      })
    )
  }
  render() {
    // console.log(this.state.response);
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            >
            </input>

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            >
            </input>
          </div>
          <button type="submit" className="btn btn-info mr-3">Login</button>
          <Link to="/registration" className="btn btn-primary">Register</Link>
        </form>
        {/* Message for users */}
        {this.state.message && <div className="alert alert-success mt-3" role="alert">
          {this.state.message}
        </div>}
        {this.state.error && <div className="alert alert-danger mt-3" role="alert">
          {this.state.error}
        </div>}
      </div>
    );
  }
}

export default Login;