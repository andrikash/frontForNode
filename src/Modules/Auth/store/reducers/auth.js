import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    isLogged: !!localStorage.getItem('token'),
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Log in
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLogged: true,
                loading: false,
            }
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false,
            }
        //Logout
        case actionTypes.LOGOUT_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogged: false,
                error: null,
                loading: false,
            }
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        //Registration
        case actionTypes.REGISTRATION_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false,
            }
        case actionTypes.REGISTRATION_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}


export default reducer;