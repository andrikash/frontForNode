import * as actionTypes from './actionTypes';
import * as api from '../../../../utils/api';
import history from '../../../../utils/history';
import {createNotification} from '../../../../utils/notifications';
import { action } from '../../../../utils/helper/action';


export const productsAction = () => dispatch => {
    dispatch(action(
        actionTypes.PRODUCTS_FETCH_START,
    ));
    return api.Product.getAllProducts()
        .then((response) => {
        dispatch(action(
            actionTypes.PRODUCTS_FETCH_SUCCESS,
            response.data
        ));
      }).catch((error) => {
        dispatch(action(
            actionTypes.PRODUCTS_FETCH_ERROR,
            error
        ));
        }
      )
}
export const productsDelete = (id) => dispatch => {
    dispatch(action(
        actionTypes.PRODUCTS_DELETE_START,
    ));
    return api.Product.deleteProduct(id)
        .then((response) => {
        dispatch(action(
            actionTypes.PRODUCTS_DELETE_SUCCESS,
            response.data
        ));
        dispatch(productsAction());
        createNotification('success');
      }).catch((error) => {
        dispatch(action(
            actionTypes.PRODUCTS_DELETE_ERROR,
            error
        ));
        }
      )
}
export const productsGetOne = (id) => dispatch => {
    dispatch(action(
        actionTypes.PRODUCTS_GETONE_START,
    ));
    return api.Product.currentProduct(id)
        .then((response) => {
        dispatch(action(
            actionTypes.PRODUCTS_GETONE_SUCCESS,
            response.data
        ));
      }).catch((error) => {
        dispatch(action(
            actionTypes.PRODUCTS_GETONE_ERROR,
            error
        ));
        }
      )
}
export const productUpdate = (id, data) => dispatch => {
    dispatch(action(
        actionTypes.PRODUCTS_UPDATE_ONE_START,
    ));
    return api.Product.updateProduct(id, data)
        .then((response) => {
        dispatch(action(
            actionTypes.PRODUCTS_UPDATE_ONE_SUCCESS,
            response.date
        ));
        history.push('/products/page');
        createNotification('success');
      }).catch((error) => {
        dispatch(action(
            actionTypes.PRODUCTS_UPDATE_ONE_ERROR,
            error
        ));
        createNotification('error');
        }
      )
}
export const productAdd = (data) => dispatch => {
    dispatch(action(
        actionTypes.PRODUCT_ADD_START,
    ));
    return api.Product.addProduct( data )
        .then((response) => {
        dispatch(action(
            actionTypes.PRODUCT_ADD_SUCCESS,
            response.data
        ));
        history.push('/products/page');
        createNotification('success');
      }).catch((error) => {
        dispatch(action(
            actionTypes.PRODUCT_ADD_ERROR,
            error
        ));
        createNotification('error');
        }
      )

}