import React, { Component } from 'react';
import LoginPage from './Modules/Auth/pages/LoginPage';
import RegisterPage  from './Modules/Auth/pages/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import { Router, Switch } from 'react-router-dom';
import EditProfile from './Modules/User/pages/EditProfile';
import PublicRoute from './services/publicRoute';
import PrivateRoute from './services/privateRoute';
import ProductPage from './Modules/Products/pages/ProductPage';
import ProductForm from './Modules/Products/pages/ProductForm';
import history from "./utils/history";
import { setLocale } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { NotificationContainer } from 'react-notifications';
// import './setupTests';
class App extends Component {
  constructor(){
    super();
    this.state = {
      token: localStorage.getItem('token')
    }
  }
  changeLanguage =  (e) => {
    this.props.setLocale(e.target.value);
  }
  render() {
    const { token } = this.state;
    return (
      <div>
        <Navbar isLogged={Boolean(token)} changeLanguage={this.changeLanguage}></Navbar>
        <div className="container col-12">
        <NotificationContainer/>
        <Router history={ history }>
          <Switch>
            <PublicRoute path="/" exact component={ LoginPage } />
            <PublicRoute path="/registration" component = { RegisterPage } isLogin={Boolean(token)} />
            <PrivateRoute path="/user/edit" component = { EditProfile } isLogin={Boolean(token)} />
            <PrivateRoute path="/products/page" component = { ProductPage } isLogin={Boolean(token)} />
            <PrivateRoute path="/product/add" component = { ProductForm } isLogin={Boolean(token)} payload={I18n.t('product.add_product')} />
            <PrivateRoute path="/product/edit/:id" component = { ProductForm } isLogin={Boolean(token)} payload={I18n.t('product.edit_product')} />
            <PrivateRoute path="user/logout" isLogin={Boolean(token)} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}
const matStateToProps = state => ({
  state,
  locale: state.i18n.locale
})

const mapDispatchToProps = dispatch => ({
  setLocale: (value) => dispatch(setLocale(value)),
});
export default connect(matStateToProps, mapDispatchToProps)(App);
