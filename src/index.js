import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setLocale } from 'react-redux-i18n';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

store.subscribe(()=>{
    const state = store.getState();
    const lang = state.i18n.locale;
    if(lang !== localStorage.getItem('lang')){
        localStorage.setItem('lang', lang);
        store.dispatch(setLocale(lang));
    }
})
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
