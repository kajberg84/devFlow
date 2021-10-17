import React, { useState, useEffect } from "react";
import "./Timer.css";

export const Timer = () => {
  const [timer, setTimer] = useState(25);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (isActive) {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  if (timer === 0 && isActive) { 
    setIsActive(false);
    console.log("Pomodoro done")
  }

  return (
    <div className="timer-wrapper">
      <h1 className="timer--title">Pomodoro</h1>
      <h2 className="timer--timer">{timer}</h2>
      <button className="btn timer--btn" onClick={() => setIsActive(true)}> Starta</button>
      <button className="btn timer--btn" onClick={() => setIsActive(false)}> Stoppa</button>
      <button className="btn timer--btn" onClick={() => setTimer(5)}> Rast</button>
      <button className="btn timer--btn" onClick={() => setTimer(25)}> Återställ</button>
    </div>
  );
};
