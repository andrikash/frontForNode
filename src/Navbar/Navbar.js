import React, { Component } from 'react'

export default class Navbar extends Component {
    handleSubmit = () => {
        localStorage.clear();
    }
  render() {
    const { isLogged } = this.props;
    console.log(this.props);
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light mb-3">
            <div className="navbar-header">
                <div className="navbar-brand ">Simple app</div>
            </div>
                { !isLogged &&
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/registration">Registration</a>
                        </li>
                    </ul>
                }
                { isLogged &&
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/editProfile">Edit profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/productPage">Product page</a>
                        </li>
                    </ul>
                }
            { isLogged && 
                <div className="ml-auto">
                    <a href="/logout" className="btn btn-danger" onClick={this.handleSubmit}>Logout</a>
                </div>
            }
        </nav>
      </div>
    )
  }
}
