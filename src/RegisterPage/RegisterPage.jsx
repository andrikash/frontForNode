import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { registrationAction } from '../store/actions/auth';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    };
    //Registration request
    handleSubmit = () => {
        const { name, email, password } = this.state;
        const { register } = this.props;
        if(name, email, password) {
            register({name,email,password});
        }
    }
    render() {
        return (
            <div className="container col-6">
                <h2>Registration</h2>
                
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="test"
                            name="name"
                            className="form-control "
                            placeholder="First Name"
                            required
                            onChange={this.handleChange}
                        >
                        </input>

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            onChange={this.handleChange}
                        >
                        </input>

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button type="submit" className="btn btn-info mr-3" onClick={this.handleSubmit}>Registration</button>
                    <Link to="/" className="btn btn-danger">Login</Link>
                
                {/* Message for users */}
                {this.props.auth.user && <div className="alert alert-success mt-3" role="alert">
                    {this.props.auth.user.statusText}
                </div>}
                {this.props.auth.error && <div className="alert alert-danger mt-3" role="alert">
                    {this.props.auth.error.message}
                </div>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
const mapDispatchToProps = dispatch => ({
    register: (data) => dispatch(registrationAction(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

