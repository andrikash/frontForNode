import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userInfo: null,
    passwordInfo: null,
    passwordError: null,
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_GET_ONE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_GET_ONE_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                error: null,
                loading: false,
            }
        case actionTypes.USER_GET_ONE_ERROR:
            return {
                ...state,
                userInfo: null,
                error: action.payload,
                loading: false,
            }
        case actionTypes.USER_EDIT_INFO_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_EDIT_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                error: null,
                loading: false,
            }
        case actionTypes.USER_EDIT_INFO_ERROR:
            return {
                ...state,
                userInfo: null,
                error: action.payload,
                loading: false,
            }
        case actionTypes.USER_CHANGE_PASWORD_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_CHANGE_PASWORD_SUCCESS:
            return {
                ...state,
                passwordInfo: action.payload,
                passwordError: null,
                loading: false,
            }
        case actionTypes.USER_CHANGE_PASWORD_ERROR:
            return {
                ...state,
                passwordInfo: null,
                passwordError: action.payload,
                loading: false,
            }
        default: 
            return state;
        }
}
export default reducer;