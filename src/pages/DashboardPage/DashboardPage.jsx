import React from 'react'
import './DashboardPage.css'
import "../HomePage/HomePage.css";
import startImage from "../../utils/images/startimage.svg";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";


export const DashboardPage = () => {
  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="main-content">
            <h1>The Productivity tool for developer students.</h1>
            <Button className="btn-home" customCssClass="btn-primary signIn--button" text="Pomodoro"
            targetPage={RoutingPath.pomodoroPage} />
            <Button className="btn-home" customCssClass="btn-primary signIn--button" text="To Do"
            targetPage={RoutingPath.todoPage} />
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