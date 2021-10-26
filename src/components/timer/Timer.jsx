import React, { useState, useEffect } from "react";
import Alarm from "../../utils/sounds/alarm.mp3";
import "./Timer.css";

const audio = new Audio(Alarm);
export const Timer = () => {
  const [timer, setTimer] = useState(25);
  const [isActive, setIsActive] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);

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

  const openSettings = () => {
    setSettingsOpen(!settingsOpen);

    if (isActive && settingsOpen) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const changeTimer = (value) => {
    setTimer(timer + value);
  };

  return (
    <div className="timer-wrapper">
      <h1 className="timer--title">Pomodoro</h1>

      <h2 className="timer--timer">{timer}</h2>

      <button className="btn timer--btn" onClick={() => setIsActive(true)}>
        Start
      </button>
      <button className="btn timer--btn" onClick={() => setIsActive(false)}>
        Stop
      </button>
      <button className="btn timer--btn" onClick={() => setTimer(5)}>
        Break
      </button>
      <button className="btn timer--btn" onClick={() => setTimer(25)}>
        Reset
      </button>
      <button className="btn timer--btn" onClick={() => openSettings()}>
        Settings
      </button>
      {settingsOpen && (
        <div className="settings">
          <form>
            <span className="span-text">Time:</span>
            <input
              className="timer--input"
              type="number"
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
            />
          </form>
          <button className="settings--btn" onClick={() => changeTimer(1)}>
            +1
          </button>
          <button className="settings--btn" onClick={() => changeTimer(5)}>
            +5
          </button>
          <button className="settings--btn" onClick={() => changeTimer(10)}>
            +10
          </button>
          <button className="settings--btn" onClick={() => changeTimer(-1)}>
            - 1
          </button>
          <button className="settings--btn" onClick={() => changeTimer(-5)}>
            - 5
          </button>
          <button className="settings--btn" onClick={() => changeTimer(-10)}>
            - 10
          </button>
          <p> Write Desired time in input</p>
          <p> Or use buttons</p>
        </div>
      )}
    </div>
  );
};
