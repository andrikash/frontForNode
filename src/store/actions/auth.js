import * as actionTypes from './actionTypes';
import * as api from '../../utils/api';

export const authAction = (email, password) => dispatch => {
    dispatch({
        type: actionTypes.AUTH_START,
    });
    return api.User.login(
        {email: email.value,
        password: password.value})
        .then((response) => {
        localStorage.setItem('currentID',response.data.user._id);
        localStorage.setItem('token',response.data.token);
        dispatch({
            type: actionTypes.AUTH_SUCCESS,
            payload: response.data.user
        });

        return Promise.resolve(response);
      }).catch((error) => {
        dispatch({
            type: actionTypes.AUTH_ERROR,
            payload: error
        });
        }
      )
}