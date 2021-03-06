import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./containers/Authentication/login.component";
import SignUp from "./containers/Authentication/signup.component";
import Post from "./containers/Post/Post";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialValues = { fname: "", laname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = "First name is required...";
    }
    if (!values.lname) {
      errors.lname = "Last name is required...";
    }
    if (!values.email) {
      errors.email = "Email is required...";
    }
    if (!values.password) {
      errors.password = "Password is required...";
    }

    return errors;
  };

  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div> }
          </div>
        </nav> */}

        {/* <div className="auth-wrapper"> */}
          <div >
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/publish" component={Post} />
            </Switch>
          </div>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
