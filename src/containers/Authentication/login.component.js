import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

<<<<<<< HEAD:src/containers/Authentication/login.component.js
import "../../index.css";

=======
import './login.module.css';
>>>>>>> 014d4eb1ca0efd9deee40cd7abd2f60e72891145:src/components/login.component.js
export default class Login extends Component {
  constructor() {
      super();
      this.state = {
          Email: '',
          Password: ''
      }  
      this.Password = this.Password.bind(this);  
      this.Email = this.Email.bind(this);  
      this.login = this.login.bind(this);
  }
  Email(event) {
      this.setState({ Email: event.target.value })
  }
  Password(event) {
      this.setState({ Password: event.target.value })
  }
  
  login(event) {
    event.preventDefault();
    fetch('http://localhost:5000/signin', {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.Email,
            password: this.state.Password
        })
        }).then((Response) => Response.json())
            .then((result) => {
                if (result.status == 400)
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }

  render() {
    return (
<<<<<<< HEAD:src/containers/Authentication/login.component.js
      <div className="auth-wrapper">
      <form method="POST" onSubmit={this.login}>
        <h3>Log In</h3>
=======
        <div className="loginForm">
          <form method="POST" onSubmit={this.login}>
          <h3>Log In</h3>
>>>>>>> 014d4eb1ca0efd9deee40cd7abd2f60e72891145:src/components/login.component.js

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange = {this.Email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange = {this.Password}
            />
          </div>

          {<div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>}

          <button type="submit" className="btn btn-primary btn-block">
            <b>Log In</b>
          </button>
<<<<<<< HEAD:src/containers/Authentication/login.component.js
        </Link>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      
=======

          <Link className="nav-link" to={"/sign-up"}>
            <button type="submit" className="btn btn btn-block btn-signup">
              SignUp Now
            </button>
          </Link>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          </form>
        </div>
        
>>>>>>> 014d4eb1ca0efd9deee40cd7abd2f60e72891145:src/components/login.component.js
    );
  }
}
