import React, { useContext } from "react";
import Logo from "../../utils/images/logo.svg";
import RoutingPath from "../../routes/RoutingPath";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../utils/provider/UserProvider";
import "../header/Header.css";

export const SignedInHeader = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("username");
    setAuthUser(false);
    history.push(RoutingPath.homePage);
  };

  return (
    <header className="header--container">
      <div className="header--wrapper">
        <img
          src={Logo}
          alt="logo"
          className="header--logo"
          onClick={() => history.push(RoutingPath.homePage)}
        />

        <nav>
          <ul className="header--nav">
            <li
              className="header--nav-item"
              onClick={() => history.push(RoutingPath.todoPage)}
            >
              To-Do
            </li>
            <li
              className="header--nav-item"
              onClick={() => history.push(RoutingPath.pomodoroPage)}
            >
              Pomodoro
            </li>
            <li>
              <button className="btn btn-primary" onClick={() => logout()}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
