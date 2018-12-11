import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
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
    handleSubmit = (ev) => {
        const { name, email, password } = this.state;
        const { register } = this.props;
        if(name, email, password) {
            register({name,email,password});
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
    render() {
        return (
            <div className="container col-4">
                <h2>{I18n.t('auth.registration')}</h2>
                
                    <div className="form-group">
                        <label>{I18n.t('auth.name')}</label>
                        <input
                            type="test"
                            name="name"
                            className="form-control "
                            placeholder={I18n.t('auth.name')}
                            required
                            onChange={this.handleChange}
                        >
                        </input>

                        <label>{I18n.t('auth.email')}</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder={I18n.t('auth.name')}
                            required
                            onChange={this.handleChange}
                        >
                        </input>

                        <label>{I18n.t('auth.password')}</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder={I18n.t('auth.password')}
                            required
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button type="submit" className="btn btn-info mr-3" onClick={this.handleSubmit}>{I18n.t('auth.registration')}</button>
                    <Link to="/" className="btn btn-danger">{I18n.t('auth.login')}</Link>
                
                {/* Message for users */}
                {this.props.auth.error && <div className="alert alert-danger mt-3" role="alert">
                    Wrong data!
                </div>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
  });
const mapDispatchToProps = dispatch => ({
    register: (data) => dispatch(registrationAction(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

