import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { registrationAction } from '../store/actions/auth';
import { registrationFields } from '../constants/inputConstants';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
        }
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
                            required
                            onChange={this.handleChange}
                        >
                        </input>
            </span>
        )
    })
    handleSubmit = () => {
        const { name, email, password } = this.state;
        const { register } = this.props;
        if(name && email && password) {
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
                        {this.renderFields(registrationFields)}
                    </div>
                    <button type="submit" className="btn btn-info mr-3" onClick={this.handleSubmit}>{I18n.t('auth.registration')}</button>
                    <Link to="/" className="btn btn-danger">{I18n.t('auth.login')}</Link>
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

