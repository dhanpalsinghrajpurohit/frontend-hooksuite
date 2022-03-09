import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../../index.css";
import classes from "./login.module.css";
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
      <div className={classes.loginForm}>
      <form method="POST" onSubmit={this.login}>
        <h3>Log In</h3>

          <div className="form-group w-75 mx-auto">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange = {this.Email}
              minLength={10}
              required
            />
          </div>

          <div className="form-group w-75 mx-auto">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange = {this.Password}
              minLength={8}
              required
            />
          </div>

          {<div className="form-group w-75 mx-auto">
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

          <button type="submit" className="btn btn-primary btn-block w-75 mx-auto">
            <b>Log In</b>
          </button>
          <p className="forgot-password text-right w-75 mx-auto">
            Forgot <a href="#">password?</a>
          </p>
      </form>
      </div>
      
    );
  }
}
