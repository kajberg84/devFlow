import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";
import { Button } from "../button/Button";
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
  const [authUser, setAuthUser] = useContext(UserContext);

  const login = () => {
    setAuthUser(username);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push(RoutingPath.dashboardPage);
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

        <form className="form--container">
          <div className="form--wrapper">
            <h5>Sign In</h5>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" onClick={() => login()}>
              Sign In
            </button>
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
