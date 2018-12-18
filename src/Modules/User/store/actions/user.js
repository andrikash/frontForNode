import * as actionTypes from './actionTypes';
import * as api from '../../../../utils/api';
import history from '../../../../utils/history';
import {createNotification} from '../../../../utils/notifications';
import { action } from '../../../../utils/helper/action';

export const  userGetOne = (id) => dispatch => {
    dispatch(action(
        actionTypes.USER_GET_ONE_START,
    ));
    return api.User.currentUser(id)
        .then((response) => {
        dispatch(action(
            actionTypes.USER_GET_ONE_SUCCESS,
            response.data
        ));
      }).catch((error) => {
        dispatch(action(
            actionTypes.USER_GET_ONE_ERROR,
            error
        ));
        }
      )
}
export const  userEditInfo = (id, data) => dispatch => {
    dispatch(action(
        actionTypes.USER_EDIT_INFO_START,
    ));
    return api.User.updateUser(id, data)
        .then((response) => {
        dispatch(action(
            actionTypes.USER_EDIT_INFO_SUCCESS,
            response.data
        ));
        createNotification('success');
      }).catch((error) => {
        dispatch(action(
            actionTypes.USER_EDIT_INFO_ERROR,
            error
        ));
        createNotification('error');
        }
      )
}
export const  userChangePassword = (id, data) => dispatch => {
    dispatch(action(
        actionTypes.USER_CHANGE_PASWORD_START,
    ));
    return api.User.changePassword(id, data)
        .then((response) => {
        dispatch(action(
            actionTypes.USER_CHANGE_PASWORD_SUCCESS,
            response.data
        ));
        history.push('/');
        createNotification('success');
      }).catch((error) => {
        dispatch(action(
            actionTypes.USER_CHANGE_PASWORD_ERROR,
            error
        ));
        createNotification('erorr');
        }
      )
}