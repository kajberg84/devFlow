// SettingsComponent.js

// React imports
import React, { useContext } from "react";
import "./SettingsComponent.css";
// Functional imports
import { SettingsContext } from '../../utils/provider/SettingsContext'

/**
 * Rendering a settings button.
 *
 * @return {*}
 */
const SettingsComponent = () => {
  const { settingsState } = useContext(SettingsContext);
  const [settingsOpen, setSettingsOpen] = settingsState

  let settingsClasses = "settings-slider";
  if (settingsOpen) {
    settingsClasses = "settings-slider settings-open";
  }

  const changeSettingsstate = () => {
    setSettingsOpen(false);
  };

  return (
    <nav className={settingsClasses}>
      <div className="settings-wrapper">
        <p>KOSSA</p>
        <button 
        onClick={() => changeSettingsstate()}>
          close
        </button>
      </div>
    </nav>
  );
};

export default SettingsComponent;
