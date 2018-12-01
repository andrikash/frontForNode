import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userGetOne, userEditInfo, userChangePassword } from '../store/actions/user';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            password: null
        }
    }
    //Current user
    componentDidMount() {
        const id = localStorage.getItem('currentID');
        const { userGetOne } = this.props;
        userGetOne(id);
    }
    // Changing password
    handleEditPassword = () => {
        const id = localStorage.getItem('currentID');
        const { password } = this.state;
        const { userChangePassword } = this.props;
        userChangePassword(id,{ password });
    }
    //Changing user's info 
    handleEdit = () => {
        const id = localStorage.getItem('currentID');
        const { name, email, phone, dateOfBirth, about } = this.state.user;
        const { userEditInfo } = this.props;
        userEditInfo(id, { name, email, phone, dateOfBirth, about });
    }

    changeState = (ev) => {
        const { name, value } = ev.target;

        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            },
            [name]: value

        }))
    }
    componentWillReceiveProps(newProps) {
        const { userInfo } = newProps.user;
        if(userInfo){
            this.setState({
                user: userInfo
            })
        }
    }
    render() {
        const { name, email, phone, dateOfBirth, about } = this.state.user || {};
        return (
            <div className="container col-6">
            
                <h2>Edit profile</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="First Name"
                            onChange={this.changeState}
                            value={ name }
                        >
                        </input>

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={this.changeState}
                            value={ email }
                        >
                        </input>

                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            onChange={this.changeState}
                            value={ phone }
                        >
                        </input>

                        <label>Date of Birth</label>
                        <input
                            type="text"
                            name="birthDate"
                            className="form-control"
                            placeholder="Date of Birth"
                            onChange={this.changeState}
                            value={ dateOfBirth }
                        >
                        </input>

                        <label>Description</label>
                        <input
                            type="text"
                            name="about"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.changeState}
                            value={ about }
                        >
                        </input>
                    </div>
                    <button type="button" className="btn btn-info" onClick={this.handleEdit}>Edit profile</button>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={this.changeState}
                        >
                        </input>
                    </div>
                    <button type="button" className="btn btn-danger mr-3" onClick={this.handleEditPassword}>Change password</button>
    
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user
  });
  
  const mapDispatchToProps = dispatch => ({
    userGetOne: (id) => dispatch(userGetOne(id)),
    userEditInfo: (id, data) => dispatch(userEditInfo(id, data)),
    userChangePassword: (id, data) => dispatch(userChangePassword(id, data)),

  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
