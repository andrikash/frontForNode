import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light mb-3">
            <div className="navbar-header">
                <div className="navbar-brand ">Simple app</div>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/registration">Registration</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/editProfile">Edit profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/productPage">Product page</a>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}
