import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    currentProduct: null,
    addData: null,
    deleteData: null,
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
        case actionTypes.PRODUCT_ADD_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PRODUCT_ADD_SUCCESS:
            return {
                ...state,
                addData: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCT_ADD_ERROR:
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
                deleteData: action.payload,
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
            return {
                ...state,
                currentProduct: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_GETONE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
            case actionTypes.PRODUCTS_UPDATE_ONE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PRODUCTS_UPDATE_ONE_SUCCESS:
            return {
                ...state,
                currentProduct: action.payload,
                loading: false,
            }
        case actionTypes.PRODUCTS_UPDATE_ONE_ERROR:
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