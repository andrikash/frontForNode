import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { loginAction } from '../store/actions/auth';
import { logingFields } from '../constants/inputConstants';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: null,
      password: null
    }
    //move email, pass from state
  }
  renderFields = (fields) => fields.map((field,i) => {
    return (
      <span key={i}>
        <label>{I18n.t(field.label)}</label>
            <input
              type={field.type}
              name={field.name}
              className="form-control"
              placeholder={I18n.t(field.label)}
              onChange={this.handleChange}
              required
            >
            </input>
      </span>
    );
  })
   handleSubmit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    if( email && password ){
      login({email, password});
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
    return (
      <div className="container col-4">
          {
            !!loading && <div>Loading...</div>
          }
        <h2>{I18n.t('auth.login')}</h2>
        <div className="form-group">
           { this.renderFields(logingFields) }
        </div>
        <button type="button" className="btn btn-info mr-3" onClick={this.handleSubmit}>{I18n.t('auth.login')}</button>
        <Link to="/registration" className="btn btn-primary">{I18n.t('auth.registration')}</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);