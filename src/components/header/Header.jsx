import React from "react";
import "./Header.css";
import Logo from "../../utils/images/logo.svg";
import { Button } from "../button/Button";
import RoutingPath from "../../routes/RoutingPath";
import { useHistory } from 'react-router-dom'

export const Header = () => {

  const history = useHistory();

  return (
    <header className="header--container">
      <div className="header--wrapper">
        <img src={Logo} alt="logo" className="header--logo" onClick={() => history.push(RoutingPath.homePage)} />

        <nav>
          <ul className="header--nav">
            <li className="header--nav-item" onClick={() => history.push(RoutingPath.pomodoroPage)}>Pomodoro</li>
            <li>
              <Button
                customCssClass="btn-primary"
                text="Sign In"
                targetPage={RoutingPath.signInPage}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
