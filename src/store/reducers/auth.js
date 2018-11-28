import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
        console.log('AUTH_SUCCESS')
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case actionTypes.AUTH_ERROR:
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