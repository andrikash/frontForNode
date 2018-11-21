import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      response : { }
    }
  }
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
      this.setState({
        response
      });

      //validate adding info into localStorage
      console.log(response);
        (response.json())
          .then((data) => {
            localStorage.setItem('currentID', data.user && data.user._id)
          })
    }
  )
      
  }
  
  render() {
      console.log(this.state.response);
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
              <Link to="/registration" className="btn btn-primary">Register</Link>
        </form>
        { this.state.response.status === 200 ? <div className="alert alert-success mt-3" role="alert">
            You seccessfully registered!
            </div> : null }
        { this.state.response.status >= 400 ? <div className="alert alert-danger mt-3" role="alert">
            Bad data
            </div> : null } 
      </div>
    );
  }
}

export default Login;