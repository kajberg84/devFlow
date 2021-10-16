import React, { useState, useEffect } from "react";
import "./Timer.css";

export const Timer = () => {
  const [timer, setTimer] = useState(25);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (isActive) {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div>
      <h1>Pomodoro</h1>
      <h2>{timer}</h2>
      <button onClick={() => setIsActive(true)}> Starta</button>
      <button onClick={() => setIsActive(false)}> Stoppa</button>
    </div>
  );
};
