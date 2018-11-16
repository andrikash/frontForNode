import React, { Component } from 'react';
import Login from './LoginPage/LoginPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage  from './RegisterPage/RegisterPage.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact = {true} component = {Login} />
          <Route path="/register" component = { RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
