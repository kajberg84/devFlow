import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";
import RoutingPath from "../../routes/RoutingPath";
import Logo from "../../utils/images/logo.svg";
import Twitter from "../../utils/icons/Twitter.svg";
import Facebook from "../../utils/icons/Facebook.svg";
import LinkedIn from "../../utils/icons/LinkedIn.svg";
import { UserContext } from "../../utils/provider/UserProvider";

export const Footer = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordLabel, setPasswordLabel] = useState();
  const [emailLabel, setEmailLabel] = useState();
  const [authUser, setAuthUser] = useContext(UserContext);

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

        <form onSubmit={login} className="form--container">
          <div className="form--wrapper">
            <h5>Sign In</h5>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setUsername(event.target.value)}
            />
            <label>{emailLabel}</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label>{passwordLabel}</label>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
      <div className="line" />
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
