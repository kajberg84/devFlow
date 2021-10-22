import React from "react";
import { useHistory } from "react-router-dom";
import "./SignInPage.css";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";

export const SignInPage = () => {
  const history = useHistory();

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const handleSignIn = () => { 
    console.log("username: ", username);
    console.log("password: ", password);
  }

  handleSignIn();

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
            className="inputfield"
            name="email"
            placeholder="email..."
          />
          <input
            type="password"
            className="inputfield"
            name="password"
            placeholder="password.."
          />
          <p href="#">Forgot password?</p>
          <Button customCssClass="btn-primary signIn--button" text="Sign In" />
          <button onClick={() => handleSignIn}>Sign In</button>
        </form>
      </div>
    </div>
  );
};
