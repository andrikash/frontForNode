import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userGetOne, userEditInfo, userChangePassword } from '../store/actions/user';
import { I18n } from 'react-redux-i18n';
import { fields } from '../constants/inputConstants';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            password: null
        }
    }
    renderFields = (fields) => fields.map((field, i) => {
        const value = this.state.user[field.name];
            return (
                <span key={i}>
                    <label>{ I18n.t(field.label) }</label>
                    <input
                        type={ field.type }
                        name={ field.name }
                        className="form-control"
                        placeholder={ I18n.t(field.label) }
                        onChange={ this.changeState }
                        value={ !!value ? value : '' }
                    >
                    </input>
                </span>
            )
        })

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
        return (
            <div className="container col-4">
                <h2>{I18n.t('user.edit_page')}</h2>
                    <div className="form-group">
                        {this.renderFields(fields)}
                    </div>
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
            </div>
        )
    }
}
const mapStateToProps = ({user, i18n}) => ({
    user: user,
    locale: i18n.locale,
  });

const mapDispatchToProps = dispatch => ({
    userGetOne: (id) => dispatch(userGetOne(id)),
    userEditInfo: (id, data) => dispatch(userEditInfo(id, data)),
    userChangePassword: (id, data) => dispatch(userChangePassword(id, data)),
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
