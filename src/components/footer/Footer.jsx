import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";
import { Button } from "../button/Button";
import RoutingPath from "../../routes/RoutingPath";
import Logo from "../../utils/images/logo.svg";
import Twitter from "../../utils/icons/Twitter.svg";
import Facebook from "../../utils/icons/Facebook.svg";
import LinkedIn from "../../utils/icons/LinkedIn.svg";

export const Footer = () => {

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
    <div className="footer--container">
      <div className="footer--nav">
        <ul>
          <h5>Product</h5>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>

        <ul>
          <h5>Information</h5>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>

        <ul>
          <h5>Company</h5>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
        <form onSubmit={handleSignIn} className="form--container">
          <div className="form--wrapper">
            <h5>Sign In</h5>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Button
              customCssClass="btn-primary"
              text="Sign In"
              targetPage={RoutingPath.signUpPage}
              className="form--button"
            />
          </div>
        </form>
      </div>
      <hr className="line"/>
      <div className="bottom--container">
        <img src={Logo} alt="logo" className="footer--logo" />
        <div className="terms--privacy--container">
          <ul>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </ul>
        </div>
        <div className="socials--container">
          <a href="#">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};
