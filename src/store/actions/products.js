import * as actionTypes from './actionTypes';
import * as api from '../../utils/api';

export const productsAction = () => dispatch => {
    dispatch({
        type: actionTypes.PRODUCTS_FETCH_START,
    });
    return api.Product.getAllProducts()
        .then((response) => {
        dispatch({
            type: actionTypes.PRODUCTS_FETCH_SUCCESS,
            payload: response.data
        });
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCTS_FETCH_ERROR,
            payload: error
        });
        }
      )
}
export const productsDelete = (id) => dispatch => {
    dispatch({
        type: actionTypes.PRODUCTS_DELETE_START,
    });
    return api.Product.deleteProduct(id)
        .then((response) => {
        dispatch({
            type: actionTypes.PRODUCTS_DELETE_SUCCESS,
            payload: response.data
        });
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCTS_DELETE_ERROR,
            payload: error
        });
        }
      )
}
export const productsGetOne = (id) => dispatch => {
    console.log(id, 'ID INSIDE ACTION');
    dispatch({
        type: actionTypes.PRODUCTS_GETONE_START,
    });
    return api.Product.currentProduct(id)
        .then((response) => {
        dispatch({
            type: actionTypes.PRODUCTS_GETONE_SUCCESS,
            payload: response.data
        });
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCTS_GETONE_ERROR,
            payload: error
        });
        }
      )
}
export const updateData = (data) => dispatch => {
    
        dispatch({
            type: actionTypes.PRODUCTS_GETONE_SUCCESS,
            payload: data
        })
}