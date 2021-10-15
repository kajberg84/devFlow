import React from "react";
import "./Header.css";
import Logo from "../../utils/images/logo.svg";

export const Header = () => {
  return (
    <header className="header--container">
      <div className="header--wrapper">
        <img src={Logo} alt="logo" className="header--logo" />

        <nav>
            <ul className="header--nav"> 
                <li className="header--nav-item">Pomodoro</li>
                <li><button>Sign In</button></li>
            </ul>
        </nav>
      </div>
    </header>
  );
};
