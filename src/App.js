import React, { Component } from 'react';
import Login from './LoginPage/LoginPage.jsx';
import RegisterPage  from './RegisterPage/RegisterPage.jsx'
import Navbar from './Navbar/Navbar.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        response : [ ]
    }
  }
  
  findAllUsers = () => {
    fetch('http://localhost:8080/api/v1/users')
      .then( response => response.json() ).then(data => {
        this.setState({
          response: data.users
        })
        console.log(data.users);
        this.state.response.forEach((user) => console.log(user));
    });
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
