import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../store/actions/auth';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    //Redux action
    if( email, password ){
    login(email, password);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      }))
  };

  render() {
    const { loading } = this.props.auth;
    console.log(loading, 'LOADING ');
     return (
      <div className="container col-6">
          {
            loading && <div>Loading...</div>
          }
        <h2>Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleChange}
              required
            >
            </input>
                
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleChange}
              required
            >
            </input>
          </div>
          <button type="button" className="btn btn-info mr-3" onClick={this.handleSubmit}>Login</button>
          <Link to="/registration" className="btn btn-primary">Registration</Link>
          {
            this.props.auth.error && <div className="alert alert-danger mt-3">
              Wrong data!
            </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);