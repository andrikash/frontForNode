import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RegisterPage extends Component {
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
          console.log(response)
      });
      firstName.value ='';
      email.value='';
      password.value='';
  }
  render() {
    return (
        <div className="container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
                <label>First Name</label>
                <input 
                type="test" 
                name="firstName"
                className="form-control" 
                placeholder="First Name"
               >
                </input>

                <label>Email</label>
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
                <button type="submit" className="btn btn-info">Register</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
        {/* {
            email && password !== '' ?
            <div className = "container">
                <p>Your email is : {email}</p>
                <p>Your passwordis : {password}</p>
             </div> :
             <p>You didn't enter any personal data yet.</p>
        } */}
      </div>
    )
  }
}

