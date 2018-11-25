import React, { Component } from 'react';
import Login from './LoginPage/LoginPage.jsx';
import RegisterPage  from './RegisterPage/RegisterPage.jsx';
import Navbar from './Navbar/Navbar';
// import ProductPage from './ProductPage/ProductPage.js';
import { Router, Switch } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile.jsx';
import PublicRoute from './services/publicRoute';
import PrivateRoute from './services/privateRoute';
import ProductPage from './Products/ProductPage'
import ProductAdd from './ProductPage/ProductForm'
import history from "./utils/history"
class App extends Component {
  constructor(props){
    super();
    this.state = {
      token: localStorage.getItem('token')
    }
    console.log(localStorage.getItem('token'))
  }
  updateToken = () => {
    this.setState({
      token: localStorage.getItem('token')
    })
  }

  render() {
    const { token } = this.state;
    return ( 
      <div>
        <Navbar isLogged={Boolean(token)}/>
      <div className="container col-10">
        <Router history={history}>
          <Switch>
            <PublicRoute path="/" exact component={ Login } isLogin={Boolean(token)} updateToken={this.updateToken}/>
            <PublicRoute path="/registration" component = { RegisterPage } isLogin={Boolean(token)} />
            <PrivateRoute path="/editProfile" component = { EditProfile } isLogin={Boolean(token)} />
            <PrivateRoute path="/productPage" component = { ProductPage } isLogin={Boolean(token)} />
            <PrivateRoute path="/addProduct" component = { ProductAdd } isLogin={Boolean(token)} />
            <PrivateRoute path="/logout" isLogin={Boolean(token)} />
          </Switch>
        </Router>
        {/*list of users*/}                                                                                                                                                                                                                  
        
        {/* 
        <button onClick={ this.findAllUsers } className="btn btn-primary">List of Users</button>
        <ul>
          {
            response.map(user => 
          <li>{ user.name }</li>
          )}
        </ul> */}
        </div>
      </div>
    );
  }
}

export default App;
