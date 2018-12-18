import * as actionTypes from './actionTypes';
import * as api from '../../../../utils/api';
import history from '../../../../utils/history';
import {createNotification} from '../../../../utils/notifications';
import { action } from '../../../../utils/helper/action';


export const loginAction = (data) => dispatch => {
    dispatch(action(
        actionTypes.LOGIN_START,
    ));
    return api.User.login(data)
        .then((response) => {
        dispatch(action(
            actionTypes.LOGIN_SUCCESS, response.data
            ));
        localStorage.setItem('currentID',response.data.user._id);
        localStorage.setItem('token',response.data.token);
        history.push('/user/edit');
      }).catch((error) => {
        dispatch(action(
            actionTypes.LOGIN_ERROR, error
            ));
        createNotification('error');
        }
      )
}
export const registrationAction = (data) => dispatch => {
    dispatch(action(
        actionTypes.REGISTRATION_START,
    ));
    return api.User.register(data)
        .then((response) => {
            dispatch(action(
                actionTypes.REGISTRATION_SUCCESS,
                response));
            history.push('/');
      }).catch((error) => {
            dispatch(action(
                actionTypes.REGISTRATION_ERROR,
                error
            ));
            createNotification('error');
      })
}
export const logoutAction = () => dispatch => {
    dispatch(action(
        actionTypes.LOGOUT_START,
    ));
    return api.User.logout()
        .then((response) => {
        dispatch(action(
            actionTypes.LOGOUT_SUCCESS,
            response
        ));
        localStorage.removeItem('token');
        history.push('/');
      }).catch((error) => {
        dispatch(action(
            actionTypes.LOGOUT_ERROR,
            error
        ));
        }
      )
}