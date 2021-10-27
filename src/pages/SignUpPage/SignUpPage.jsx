import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../utils/provider/UserProvider";
import "./SignUpPage.css";
import "../SignInPage/SignInPage.css";

export const SignUpPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordLabel, setPasswordLabel] = useState();
  const [emailLabel, setEmailLabel] = useState();
  const [authUser, setAuthUser] = useContext(UserContext);

  const login = (event) => {
    event.preventDefault();

    if (
      username === undefined ||
      password === undefined ||
      confirmPassword === undefined
    ) {
      setEmailLabel("Please type in all fields");
    } else {
      if (username.includes("@")) {
        if (password === confirmPassword) {
          if (password.length > 5) {
            setAuthUser(username);
            localStorage.setItem("password", password);
            localStorage.setItem("username", username);
            history.push("/dashboard");
          } else {
            setPasswordLabel(
              "The chosen passoword needs to be 6 characters or more"
              );
              setEmailLabel("")
          }
        } else {
          setPasswordLabel("Passwords do not match");
          setEmailLabel("")
        }
      } 
    }
  };

  return (
    <div className="signIn--container">
      <div className="signIn--card">
        <h1 className="signIn--title">Create Account</h1>
        <p className="p-large">Do you already have an account?</p>

        <p
          className="p-normal p--link"
          onClick={() => history.push(RoutingPath.signInPage)}
        >
          Sign In
        </p>

        <form onSubmit={login} className="form--inputs">
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="email"
            className="inputfield"
            name="email"
            placeholder="E-mail..."
          />
          <label htmlFor="">{emailLabel}</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="inputfield"
            name="password"
            placeholder="Password..."
          />
          <label htmlFor="">{passwordLabel}</label>
          <input
            type="password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="inputfield"
            name="confirmPassword"
            placeholder="Confirm Password.."
          />
          <p>Forgot password?</p>
          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
