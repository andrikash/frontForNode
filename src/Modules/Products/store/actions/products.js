import * as actionTypes from './actionTypes';
import * as api from '../../../../utils/api';
import history from '../../../../utils/history';


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
        dispatch(productsAction());
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCTS_DELETE_ERROR,
            payload: error
        });
        }
      )
}
export const productsGetOne = (id) => dispatch => {
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
export const productUpdate = (id, data) => dispatch => {
    dispatch({
        type: actionTypes.PRODUCTS_UPDATE_ONE_START,
    });
    return api.Product.updateProduct(id, data)
        .then((response) => {
        dispatch({
            type: actionTypes.PRODUCTS_UPDATE_ONE_SUCCESS,
            payload: response.data
        });
        history.push("/products/page")
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCTS_UPDATE_ONE_ERROR,
            payload: error
        });
        }
      )
}
export const productAdd = (data) => dispatch => {

    console.log(data, 'INSIDE ACTION')
    dispatch({
        type: actionTypes.PRODUCT_ADD_START,
    });
    return api.Product.addProduct( data )
        .then((response) => {
        dispatch({
            type: actionTypes.PRODUCT_ADD_SUCCESS,
            payload: response.data
        });
        history.push('/products/page');
      }).catch((error) => {
        dispatch({
            type: actionTypes.PRODUCT_ADD_ERROR,
            payload: error
        });
        }
      )

}