import React, { Component } from 'react';
import Login from './LoginPage/LoginPage.jsx';
import RegisterPage  from './RegisterPage/RegisterPage.jsx'
import Navbar from './Navbar/Navbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile.jsx';


class App extends Component {
  constructor(props){
    super();
  }
  render() {
    // const { response } = this.state;
    return (
      <div>
        <Navbar />
      <div className="container col-6">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact = { true } component = { Login } />
            <Route path="/registration" component = { RegisterPage } />
            <Route path="/editProfile" component = { EditProfile } />
            <Route path="/productPage" component = { ProductPage } />
          </Switch>
        </BrowserRouter>
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
