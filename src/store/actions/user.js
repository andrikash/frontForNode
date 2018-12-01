import * as actionTypes from './actionTypes';
import * as api from '../../utils/api';

export const  userGetOne = (id) => dispatch => {
    dispatch({
        type: actionTypes.USER_GET_ONE_START,
    });
    return api.User.currentUser(id)
        .then((response) => {
        dispatch({
            type: actionTypes.USER_GET_ONE_SUCCESS,
            payload: response.data.result
        });
        console.log(response);
      }).catch((error) => {
        dispatch({
            type: actionTypes.USER_GET_ONE_ERROR,
            payload: error
        });
        }
      )
}
export const  userEditInfo = (id, data) => dispatch => {
    dispatch({
        type: actionTypes.USER_EDIT_INFO_START,
    });
    return api.User.updateUser(id, data)
        .then((response) => {
        dispatch({
            type: actionTypes.USER_EDIT_INFO_SUCCESS,
            payload: response.data
        });
        console.log(response);
      }).catch((error) => {
        dispatch({
            type: actionTypes.USER_EDIT_INFO_ERROR,
            payload: error
        });
        }
      )
}
export const  userChangePassword = (id, data) => dispatch => {
    console.log(id, data, 'DATAAAAASSSSSSUCK');
    dispatch({
        type: actionTypes.USER_CHANGE_PASWORD_START,
    });
    return api.User.changePassword(id, data)
        .then((response) => {
        dispatch({
            type: actionTypes.USER_CHANGE_PASWORD_SUCCESS,
            payload: response.data
        });
        console.log(response, 'PASSSWORD');
      }).catch((error) => {
        dispatch({
            type: actionTypes.USER_CHANGE_PASWORD_ERROR,
            payload: error
        });
        }
      )
}