import * as actionTypes from './actionTypes';
import * as api from '../../../../utils/api';
import history from '../../../../utils/history';

export const loginAction = (email, password) => dispatch => {
    dispatch({
        type: actionTypes.LOGIN_START,
    });
    return api.User.login(
        {email,
        password}
        )
        .then((response) => {
        localStorage.setItem('currentID',response.data.user._id);
        localStorage.setItem('token',response.data.token);
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: response.data,
        });
        history.push('/user/edit');
      }).catch((error) => {
        dispatch({
            type: actionTypes.LOGIN_ERROR,
            payload: error
        });
        }
      )
}
export const registrationAction = (data) => dispatch => {
    dispatch({
        type: actionTypes.REGISTRATION_START,
    });
    return api.User.register(data)
        .then((response) => {
        dispatch({
            type: actionTypes.REGISTRATION_SUCCESS,
            payload: response
        });
        history.push('/');
      }).catch((error) => {
        dispatch({
            type: actionTypes.REGISTRATION_ERROR,
            payload: error
        });
        }
      )
}
export const logoutAction = () => dispatch => {
    dispatch({
        type: actionTypes.LOGOUT_START,
    });
    return api.User.logout()
        .then((response) => {
        dispatch({
            type: actionTypes.LOGOUT_SUCCESS,
            payload: response
        });
        localStorage.removeItem('token');
        history.push('/');
      }).catch((error) => {
        dispatch({
            type: actionTypes.LOGOUT_ERROR,
            payload: error
        });
        }
      )
}