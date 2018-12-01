import * as actionTypes from './actionTypes';
import * as api from '../../utils/api';
import history from '../../utils/history';

export const loginAction = (email, password) => dispatch => {
    dispatch({
        type: actionTypes.AUTH_START,
    });
    return api.User.login(
        {email,
        password}
        )
        .then((response) => {
        localStorage.setItem('currentID',response.data.user._id);
        localStorage.setItem('token',response.data.token);
        dispatch({
            type: actionTypes.AUTH_SUCCESS,
            payload: response.data.user
        });
        history.push('/editProfile');
      }).catch((error) => {
        dispatch({
            type: actionTypes.AUTH_ERROR,
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
      }).catch((error) => {
        dispatch({
            type: actionTypes.REGISTRATION_ERROR,
            payload: error
        });
        }
      )
}