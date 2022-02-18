import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './login.module.css';
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
        <div className="loginForm">
          <form method="POST" onSubmit={this.login}>
          <h3>Log In</h3>

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
        
    );
  }
  // handleClick(event){
  //   var apiBaseUrl = "http://localhost:5000/signin/";
  //   var self = this;
    
  //   var payload={
  //   "email":this.state.username,
  //   "password":this.state.password
  //   }
  //   console.log(payload);
  //   alert(payload);
  //   // axios.post(apiBaseUrl+'login', payload)
  //   // .then(function (response) {
  //   // console.log(response);
  //   // if(response.data.code == 200){
  //   // console.log("Login successfull");
  //   // var uploadScreen=[];
  //   // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  //   // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  //   // }
  //   // else if(response.data.code == 204){
  //   // console.log("Username password do not match");
  //   // alert("username password do not match")
  //   // }
  //   // else{
  //   // console.log("Username does not exists");
  //   // alert("Username does not exist");
  //   // }
  //   // })
  //   // .catch(function (error) {
  //   // console.log(error);
  //   // });
  //   }
  

  
  
}


// export function PostData(userData) {
//   let BaseUrl = "http://localhost:5000/signin/";
//   console.log("userData", userData);

//   return new Promise((resolve, reject) => {
//   fetch(BaseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     }
//     // body: JSON.stringify(userData)
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       resolve(responseJson);
//     })
//     .catch(error => {
//       reject(error);
//     });
//   });
// }