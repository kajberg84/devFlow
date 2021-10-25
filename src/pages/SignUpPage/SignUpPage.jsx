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
  const [authUser, setAuthUser] = useContext(UserContext);

  const login = () => {
    setAuthUser(username);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push("/dashboard");
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

        <form className="form--inputs">
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            className="inputfield"
            name="email"
            placeholder="E-mail..."
          />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="inputfield"
            name="password"
            placeholder="Password.."
          />
          <input
            type="password"
            className="inputfield"
            name="confirmPassword"
            placeholder="Confirm Password.."
          />
          <p>Forgot password?</p>
          <button className="btn btn-primary" onClick={() => login()}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
