import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./SignInPage.css";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../utils/provider/UserProvider";

export const SignInPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordLabel, setPasswordLabel] = useState();
  const [emailLabel, setEmailLabel] = useState();
  const [authUser, setAuthUser] = useContext(UserContext);

  // const login = (event) => {
  //   event.preventDefault();
    
  //   if (username.includes("@")) {
  //     if (password.length > 5) {
  //       setAuthUser(username);
  //       localStorage.setItem("password", password);
  //       localStorage.setItem("username", username);
  //       history.push("/dashboard");
  //     } else {
  //       setPasswordLabel(
  //         "The password is too short. Please try again.",
  //       );
  //     }
  //   } else {
  //     setEmailLabel("Type in a correct email address");
  //   }
  // };

  const login = (event) => {
    event.preventDefault();
    if (username === undefined || password === undefined) {
      setEmailLabel("Email is required");
      setPasswordLabel("Password is required");
    } else {
      if (username.includes("@")) {
        if (password.length > 5) {
          setAuthUser(username);
          localStorage.setItem("password", password);
          localStorage.setItem("username", username);
          history.push(RoutingPath.dashboardPage);
        } else {
          setPasswordLabel("The password is too short. Please try again.");
          setEmailLabel("");
        }
      } else {
        setEmailLabel("Type in a correct email address");
      }
    }
  };

  return (
    <div className="signIn--container">
      <div className="signIn--card">
        <h1 className="signIn--title">Sign in to devFlow.</h1>
        <p className="p-large">Don't have an account?</p>
        <p
          className="p-normal p--link"
          onClick={() => history.push(RoutingPath.signUpPage)}
        >
          Create Account
        </p>

        <form onSubmit={login} className="form--inputs">
          <input
            type="email"
            onChange={(event) => setUsername(event.target.value)}
            className="inputfield"
            name="email"
            placeholder="email..."
          />
          <label>{emailLabel}</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="inputfield"
            name="password"
            placeholder="password.."
          />
          <label>{passwordLabel}</label>
          <p href="#">Forgot password?</p>
          <button className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  );
};
