import authReducer from '../Modules/Auth/store/reducers/auth';
import productsReducer from '../Modules/Products/store/reducers/products';
import userReducer from '../Modules/User/store/reducers/user';
import thunk from 'redux-thunk';
import { translationObject } from '../helper/commonTranslationObj';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    user: userReducer,
    i18n: i18nReducer,
    form: formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));
syncTranslationWithStore(store);

store.dispatch(loadTranslations(translationObject()));
const initLang = localStorage.getItem('lang') || 'uk';
store.dispatch(setLocale(initLang));
localStorage.setItem('lang', initLang);

export default store;
