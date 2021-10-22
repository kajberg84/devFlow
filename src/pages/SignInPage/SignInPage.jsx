import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignInPage.css";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";

export const SignInPage = () => {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState(() => {
    const localData = localStorage.getItem("username");
    return localData;
  });
  const [userPassword, setUserPassword] = useState(() => {
    const localData = localStorage.getItem("password");
    return localData;
  });

  const handleSignIn = (event) => {
    event.preventDefault();
    const signInUserEmail = event.target[0].value;
    const signInuserPassword = event.target[1].value;

    if (signInUserEmail === userEmail && signInuserPassword === userPassword) {
      history.push(RoutingPath.dashboardPage);
    } else {
      alert("Invalid Email or Password");
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

        <form onSubmit={handleSignIn} className="form--inputs">
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
        </form>
      </div>
    </div>
  );
};
