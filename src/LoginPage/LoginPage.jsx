import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;
    const userData = {
      email: email.value,
      password: password.value
    }
    const options = { 
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
         body: JSON.stringify(userData)
    } 
    fetch('http://localhost:8080/api/v1/users/login', options)
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
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
              <Link to="/register" className="btn btn-primary">Register</Link>
        </form>
      </div>
    );
  }
}

export default Login;