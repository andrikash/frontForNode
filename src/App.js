import React, { Component } from 'react';
import Login from './LoginPage/LoginPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage  from './RegisterPage/RegisterPage.jsx'

class App extends Component {
  render() {
    return (
      <div className="container col-6">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact = {true} component = {Login} />
            <Route path="/register" component = { RegisterPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
