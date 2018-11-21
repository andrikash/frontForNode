import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RegisterPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          response : {}
      }
  }
  handleSubmit = e => {
    e.preventDefault();
    const { email,password,firstName } = e.target;
    const userData = {
        name: firstName.value,
        email:email.value,
        password: password.value
    };
    const options = { 
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
           body: JSON.stringify(userData)
      } 
    fetch('http://localhost:8080/api/v1/users',options)
      .then(response => {
          this.setState({
             response
          })
      });
      firstName.value ='';
      email.value='';
      password.value='';
  }
  render() {
    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
                <label>First Name</label>
                <input 
                type="test" 
                name="firstName"
                className="form-control " 
                placeholder="First Name"
                required
               >
                </input>

                <label>Email</label>
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
                <button type="submit" className="btn btn-info mr-3">Register</button>
                <Link to="/" className="btn btn-danger">Login</Link>
        </form>
        { this.state.response.status === 201 ? <div className="alert alert-success mt-3" role="alert">
            You seccessfully registered!
            </div> : null }
        { this.state.response.status >= 400 ? <div className="alert alert-danger mt-3" role="alert">
            Bad data
            </div> : null } 
      </div>
    )
  }
}

