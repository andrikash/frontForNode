import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('EMAIL',e.target.email.value)
    console.log('PASSWORD',e.target.email.value)
    // fetch('http://localhost:8080/api/v1/users/login',{
    //   method: 'post',
    //   headers: {'Content-Type':'application/json'},
    //   body: {
    //     email:email.value,
    //     password: password.value
    //   }
    // });
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
               >
                </input>

                <label>Password</label>
                <input 
                type="password"
                name="password"
                className="form-control" 
                placeholder="Password"
                >
                </input>
            </div>
              <button type="submit" className="btn btn-info">Login</button>
              <Link to="/register" className="btn btn-primary">Register</Link>
        </form>
      </div>
    );
  }
}

export default Login;