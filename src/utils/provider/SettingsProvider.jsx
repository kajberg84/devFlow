import React, { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext(null);

/**
 * Creating settings Router
 *
 * @param {*} { children }
 * @return {*} - Returning a User Provider
 */
 export const SettingsProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        menuState: [menuOpen, setMenuOpen],
        settingsState: [settingsOpen, setSettingsOpen],
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
