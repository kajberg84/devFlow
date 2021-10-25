import React, { createContext, useState } from "react";

export const SettingsContext = createContext(null);

/**
 * Creating settings Router
 *
 * @param {*} { children }
 * @return {*} - Returning a settingsProvider
 */
 const SettingsProvider = ({ children }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        settingsState: [settingsOpen, setSettingsOpen],
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;