import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./SignInPage.css";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../utils/provider/UserProvider";

export const SignInPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState(); 
  const [password, setPassword] = useState(); 
  const [authUser, setAuthUser] = useContext(UserContext);

  const login = () => {
    setAuthUser(username);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push("/pomodoro");
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

        <form className="form--inputs">
          <input
            type="email"
            onChange={(event) => setUsername(event.target.value)}
            className="inputfield"
            name="email"
            placeholder="email..."
          />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="inputfield"
            name="password"
            placeholder="password.."
          />
          <p href="#">Forgot password?</p>
          <button className="btn btn-primary" onClick={() => login()}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
