import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';

import authReducer from './store/reducers/auth';
import productsReducer from './store/reducers/products';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    user: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
