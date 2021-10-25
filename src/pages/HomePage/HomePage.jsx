import React from "react";
import "./HomePage.css";
import startImage from "../../utils/images/startimage.svg";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";


export const HomePage = () => {
  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="main-content">
            <h1>The Productivity tool for developer students.</h1>
            <Button className="btn-home" customCssClass="btn-primary signIn--button" text="Pomodoro"
            targetPage={RoutingPath.pomodoroPage} />
        </div>
        <img
          src={startImage}
          alt="Person reading a box while sitting on a box"
          className="mainImage"
        ></img>
      </div>
    </main>
  );
};
