import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from '../utils/history';
import { connect } from 'react-redux';
import { authAction } from '../store/actions/auth';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;
    const { authFunction } = this.props;
    authFunction(email, password).then((res) => {
      history.push('/editProfile');
    });
  }

  render() {
     return (
      <div className="container col-6">
        <h2>Login</h2>
        <form action="/registration" method="get" onSubmit={this.handleSubmit}>
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
          <input type="submit" className="btn btn-info mr-3" value="Login"/>
          <Link to="/registration" className="btn btn-primary">Registration</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  authFunction: (email, password) => dispatch(authAction(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);