import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userGetOne, userEditInfo, userChangePassword } from '../store/actions/user';
import { I18n } from 'react-redux-i18n';

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
        const { error, passwordError, userInfo } = this.props.user;
        console.log('UserInfo > ', userInfo);
        return (
            <div className="container col-4">
                <h2>{I18n.t('user.edit_page')}</h2>
                    <div className="form-group">
                        <label>{I18n.t('user.name')}</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={I18n.t('user.name')}
                            onChange={this.changeState}
                            value={ name }
                        >
                        </input>

                        <label>{I18n.t('user.email')}</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder={I18n.t('user.email')}
                            onChange={this.changeState}
                            value={ email }
                        >
                        </input>

                        <label>{I18n.t('user.phone')}</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder={I18n.t('user.phone')}
                            onChange={this.changeState}
                            value={ phone }
                        >
                        </input>

                        <label>{I18n.t('user.date_birth')}</label>
                        <input
                            type="text"
                            name="birthDate"
                            className="form-control"
                            placeholder={I18n.t('user.date_birth')}
                            onChange={this.changeState}
                            value={ dateOfBirth }
                        >
                        </input>

                        <label>{I18n.t('user.description')}</label>
                        <input
                            type="text"
                            name="about"
                            className="form-control"
                            placeholder={I18n.t('user.description')}
                            onChange={this.changeState}
                            value={ about }
                        >
                        </input>
                    </div>
                    {
                        error && <div className="alert alert-danger">{I18n.t('user.error')}</div>
                    }
                    <button type="button" className="btn btn-info" onClick={this.handleEdit}>{I18n.t('user.edit_profile')}</button>
                    <div className="form-group mt-3">
                        <label>{I18n.t('user.password')}</label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            placeholder={I18n.t('user.password')}
                            onChange={this.changeState}
                        >
                        </input>
                    </div>
                    <button type="button" className="btn btn-danger mr-3" onClick={this.handleEditPassword}>{I18n.t('user.change_password')}</button>
                    {
                        passwordError && <div className="alert alert-danger">{I18n.t('user.error')}</div>
                    }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user,
    locale: state.i18n.locale,
  });
  
  const mapDispatchToProps = dispatch => ({
    userGetOne: (id) => dispatch(userGetOne(id)),
    userEditInfo: (id, data) => dispatch(userEditInfo(id, data)),
    userChangePassword: (id, data) => dispatch(userChangePassword(id, data)),

  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
