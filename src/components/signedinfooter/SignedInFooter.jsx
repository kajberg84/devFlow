import React from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import "./SignedInFooter.css";
import Logo from "../../utils/images/logo.svg";
import Twitter from "../../utils/icons/Twitter.svg";
import Facebook from "../../utils/icons/Facebook.svg";
import LinkedIn from "../../utils/icons/LinkedIn.svg";

export const SignedInFooter = () => {
    const history = useHistory();

  return (
    <footer className="footer--container">
      <div className="footer--wrapper">
        <img src={Logo} alt="logo" className="footer--logo" onClick={() => history.push(RoutingPath.dashboardPage)} />
        <nav className="nav-wrapper">
          <ul className="nav-ul">
            <li className="nav-ul-li" onClick={() => history.push(RoutingPath.dashboardPage)}>Home</li>
            <li className="nav-ul-li" onClick={() => history.push(RoutingPath.pomodoroPage)}>Pomodoro</li>
            <li className="nav-ul-li" onClick={() => history.push(RoutingPath.todoPage)}>To-Do</li>
          </ul>
        </nav>
        <div className="socials--wrapper">
          <p>
            <img className="social-icon" src={LinkedIn} alt="LinkedIn" />
          </p>
          <p>
            <img className="social-icon" src={Facebook} alt="Facebook" />
          </p>
          <p>
            <img className="social-icon" src={Twitter} alt="Twitter" />
          </p>
        </div>
      </div>
    </footer>
  );
};
