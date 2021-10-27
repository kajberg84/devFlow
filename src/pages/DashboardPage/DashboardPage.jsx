import React from "react";
import "./DashboardPage.css";
import dashboardImage from "../../utils/images/dashboard-illustration.svg";
import { Button } from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";

export const DashboardPage = () => {
  return (
    <main className="dashboard--main-container">
      <div className="dashboard--main-wrapper">
        <div className="dashboard--main-content">
          <h1>Welcome to devFlow.</h1>
          <div className="dashboard--main-content-buttons">
            <Button
              customCssClass="btn-primary signIn--button"
              text="Pomodoro"
              targetPage={RoutingPath.pomodoroPage}
            />

            <Button
              customCssClass="btn-primary btn-home signIn--button"
              text="To-Do"
              targetPage={RoutingPath.todoPage}
            />
          </div>
        </div>
        <img
          src={dashboardImage}
          alt="Person reading a box while sitting on a box"
          className="dashboard--img"
        ></img>
      </div>
    </main>
  );
};
