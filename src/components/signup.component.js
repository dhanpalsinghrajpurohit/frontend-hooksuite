import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Username:'',
        FirstName:'',
        LastName:'',
        Email: '',
        Password: ''
    }  
    this.Password = this.Password.bind(this);  
    this.Email = this.Email.bind(this);  
    this.signup = this.signup.bind(this);
    this.Username = this.Username.bind(this);  
    this.FirstName = this.FirstName.bind(this);
    this.LastName = this.LastName.bind(this);
  }

  Username(event) {
    this.setState({ Username: event.target.value })
  } 

  FirstName(event) {
    this.setState({ FirstName: event.target.value })
  }

  LastName(event) {
    this.setState({ LastName: event.target.value })
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  signup(event){
    event.preventDefault();
    console.log(this.state.Email);
    alert(this.state.FirstName);
    fetch('http://localhost:5000/signup', {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.Username,
            password: this.state.Password,
            firstname: this.state.FirstName,
            lastname: this.state.LastName,
            email: this.state.Email
        })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.status == 400)
                    alert('Invalid User');
                else
                    this.props.history.push("/sign-in");
            });
  }

  render() {
    return (
      <form onSubmit={this.signup} method="POST">
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            onChange = {this.Username}
          />
        </div>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange = {this.FirstName}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Last name" 
          onChange = {this.LastName}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered ?
          {/* <Link className="nav-link" to={"/sign-in"}>
            Log In <a href="#">Now</a>
          </Link> */}
          

        </p>
      </form>
    );
  }
}
