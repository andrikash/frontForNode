import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_DELETE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PRODUCTS_DELETE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_DELETE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
            case actionTypes.PRODUCTS_GETONE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PRODUCTS_GETONE_SUCCESS:
        console.log(action.payload , 'PAYYYY')
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_GETONE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default: 
            return state;
    }
}
export default reducer;