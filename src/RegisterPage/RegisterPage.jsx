import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null
        }
    }
    //Registration request
    handleSubmit = e => {
        e.preventDefault();
        const { email, password, firstName } = e.target;
        api.User.register(
            {name: firstName.value,
            email: email.value,
            password: password.value})
        .then(() =>
            this.setState({
                message: 'Successfully registered!',
                error: null
            })
        ).catch(() =>
            this.setState({
                error: 'Error',
                message: null
            })
        )
        firstName.value = '';
        email.value = '';
        password.value = '';
    }
    render() {
        return (
            <div className="container col-6">
                <h2>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
                    <button type="submit" className="btn btn-info mr-3">Registration</button>
                    <Link to="/" className="btn btn-danger">Login</Link>
                </form>
                {/* Message for users */}
                {this.state.message && <div className="alert alert-success mt-3" role="alert">
                    {this.state.message}
                </div>}
                {this.state.error && <div className="alert alert-danger mt-3" role="alert">
                    {this.state.error}
                </div>}
            </div>
        )
    }
}

