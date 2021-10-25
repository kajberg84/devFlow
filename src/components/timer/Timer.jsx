import React, { useState, useEffect } from "react";
import Alarm from '../../utils/sounds/alarm.mp3'
import "./Timer.css";


const audio = new Audio(Alarm);
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

  if (timer === 0 && isActive) {
    audio.play();
    setIsActive(false);
    console.log("Pomodoro done");
  }


  return (
    <div className="timer-wrapper">
      <h1 className="timer--title">Pomodoro</h1>
      <h2 className="timer--timer">{timer}</h2>
      <button className="btn timer--btn" onClick={() => setIsActive(true)}>
        Starta
      </button>
      <button className="btn timer--btn" onClick={() => setIsActive(false)}>
        Stoppa
      </button>
      <button className="btn timer--btn" onClick={() => setTimer(5)}>
        Rast
      </button>
      <button className="btn timer--btn" onClick={() => setTimer(25)}>
        Återställ
      </button>
    </div>
  );

  
};
