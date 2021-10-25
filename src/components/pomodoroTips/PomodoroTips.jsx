import React from "react";
import "./PomodoroTips.css";

export const PomodoroTips = () => {
  return (
    <div>
      <div className="pomodoro--tips">
        <h3>What is DevFlow?</h3>
        <p>
          DevFlow is a customizable pomodoro timer that
          works on the browser. The aim of this app is to help you focus on any
          task you are working on, such as study, writing, or coding. This app
          is inspired by Pomodoro Technique which is a time management method
          developed by Francesco Cirillo.
        </p>
      </div>
      <div className="pomodoro--tips">
        <h3>What is Pomodoro Technique?</h3>
        <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>
      </div>
      <div className="pomodoro--tips">
        <h3>How to use the Pomodoro Timer?</h3>
        <ol>
            <li>1. Choose a task to work on</li>
            <li>2. Start timer and focus on the task for 25 minutes</li>
            <li>3. Take a break for 5 minutes when the alarm ring</li>
            <li>4. Repeat this as many times needed for you to complete your task</li>
        </ol>
      </div>
    </div>
  );
};
