import React, { Component } from 'react';
import * as api from '../utils/api';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: null,
                email: null,
                phone: null,
                birthDate: null,
                description: null
            },
            errorUpdateInfo: null,
            messageUpdateInfo: null,
            errorUpdatePassword: null,
            messageUpdatePassword: null
        }
    }
    //Current user ID 
    componentDidMount() {
        const id = localStorage.getItem('currentID');
        api.User.currentUser(id)
            .then((response) => {
                this.setState({
                    form: {
                        name: response.data.result.name,
                        email: response.data.result.email,
                        phone: response.data.result.phone,
                        birthDate: response.data.result.dateOfBirth,
                        description: response.data.description
                    }
                })
            });
    }
    //Changing password
    handleSubmitPassword = e => {
        e.preventDefault();
        const { password } = e.target
        const id = localStorage.getItem('currentID');
        api.User.changePassword(id,{
            password: password.value
        }).then(() => {
            this.setState({
                messageUpdatePassword: 'Successful change password',
                errorUpdateInfo: null
            })
        }).catch(() => {
            this.setState({
                errorUpdatePassword: 'Bad data',
                messageUpdatePassword: null
            })
        });
        password.value = '';
    }
    //Changing user's info 
    handleSubmit = e => {
        e.preventDefault();
        const { email, firstName, phone, birthDate, description } = e.target;
        const id = localStorage.getItem('currentID');

        api.User.updateUser(id, 
            {name: firstName.value,
            email: email.value,
            phone: phone.value,
            dateOfBirth: birthDate.value,
            description: description.value})
        .then(() =>
            this.setState({
                messageUpdateInfo: 'Successfuly changed user\'s info',
                errorUpdateInfo: null

        })).catch(() =>
            this.setState({
                errorUpdateInfo: 'Bad data',
                messageUpdateInfo: null
            }));
    }

    changeState = (ev) => {
        this.setState({
            form: {
                name: ev.currentTarget.value.name,
                email: ev.currentTarget.value.email,
                phone: ev.currentTarget.value.phone,
                birthDate: ev.currentTarget.value.birthDate,
                description: ev.currentTarget.value.description
            }
        })
    }

    render() {
        return (
            <div className="container col-6">
                <h2>Edit profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            onChange={this.changeState}
                            value={this.state.form ? this.state.form.name: ""}
                        >
                        </input>

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={this.changeState}
                            value={this.state.form ? this.state.form.email : ""}
                        >
                        </input>

                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            onChange={this.changeState}
                            value={this.state.form ? this.state.form.phone : ""}
                        >
                        </input>

                        <label>Date of Birth</label>
                        <input
                            type="text"
                            name="birthDate"
                            className="form-control"
                            placeholder="Date of Birth"
                            onChange={this.changeState}
                            value={this.state.form ? this.state.form.dateOfBirth : ""}
                        >
                        </input>

                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.changeState}
                            value={this.state.form ? this.state.form.description : ""}
                        >
                        </input>
                    </div>
                    {/* Message for users */}
                    {this.state.messageUpdateInfo && <div className="alert alert-success mt-3" role="alert">
                        {this.state.messageUpdateInfo}
                    </div>}
                    {this.state.errorUpdateInfo && <div className="alert alert-danger mt-3" role="alert">
                        {this.state.errorUpdateInfo}
                    </div>}
                    <button type="submit" className="btn btn-info">Edit profile</button>
                </form>
                <form onSubmit={this.handleSubmitPassword} className="mt-3">
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                        >
                        </input>
                    </div>
                    {/* Message for users */}
                    {this.state.messageUpdatePassword && <div className="alert alert-success mt-3" role="alert">
                        {this.state.messageUpdatePassword}
                    </div>}
                    {this.state.errorUpdatePassword && <div className="alert alert-danger mt-3" role="alert">
                        {this.state.errorUpdatePassword}
                    </div>}
                    <button type="submit" className="btn btn-danger mr-3">Change password</button>
                </form>
            </div>
        )
    }
}
