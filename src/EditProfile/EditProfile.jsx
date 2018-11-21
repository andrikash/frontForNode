import React, { Component } from 'react';

export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                email: ''
            },
            responseUpdateUser : { },
            responsePassword: { }
        }
    }
    componentDidMount(){
        let id = localStorage.getItem('currentID');
        if(id === undefined) {
            id = ''
        };
        console.log(id);
        fetch(`http://localhost:8080/api/v1/users/${id}`,{method: 'get'})
        .then(response => response.json())
        .then(data => this.setState({
            form: { 
                name : data.name,
                email: data.email
            }
        }));
    }
    handleSubmitPassword = e => {
        e.preventDefault();
        const { password } = e.target
        const passwordData = {
            password: password.value
        } 
        const id = '5beed77bf6eec218c7f584be';
        console.log(JSON.stringify(passwordData));
        const options = { 
            method: 'put',
            body: JSON.stringify(passwordData)
          }
        fetch(`http://localhost:8080/api/v1/users/changePassword/${id}`,options)
            .then(response => {
                this.setState({
                    password: response
                })
                console.log(response);
            });
        password.value = '';    
     }

    handleSubmit = e => {
      e.preventDefault();
      const { email,firstName } = e.target;

      const userData = {
          name:firstName.value,
          email:email.value
      };
      const options = { 
          method: 'put',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
             body: JSON.stringify(userData)
        } 
      fetch('http://localhost:8080/api/v1/users/5beed7fbf6eec218c7f584c1',options)
        .then(response => {
            this.setState({
                responseUpdateUser : response
            })
        });
        firstName.value ='';
        email.value='';
    }

    changeState = (ev) => {
        this.setState({
            form : {
                name: ev.currentTarget.value.name,
                email: ev.currentTarget.value.email
            }
        })
    }


  render() {
    return (
        <div>
        <h2>Edit profile</h2>
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
                <label>Name</label>
                <input 
                type="text" 
                name="firstName"
                className="form-control" 
                placeholder="First Name"
                onChange={this.changeState}
                value={this.state.form.name}
               >
                </input>
                
                <label>Email</label>
                <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Email"
                onChange={this.changeState}
                value={this.state.form.email}
               >
                </input>
            </div>
                <button type="submit" className="btn btn-info mr-3">Edit profile</button>
                {/* <Link to="/" className="btn btn-danger">Login</Link> */}
        </form>
        <form onSubmit={this.handleSubmitPassword} className="mt-3">
            <div className = "form-group">
                <label>Password</label>
                <input 
                type="password" 
                name="password"
                className="form-control" 
                placeholder="Password"
               >
                </input>
            </div>
                <button type="submit" className="btn btn-danger mr-3">Change password</button>
                {/* <Link to="/" className="btn btn-danger">Login</Link> */}
        </form>
      </div>
    )
  }
}
