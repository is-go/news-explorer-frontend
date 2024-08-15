import React, { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const location = useLocation();
  const savedLocation = location.pathname === "/saved-articles";

  return (
    <LocationContext.Provider value={savedLocation}>
      {children}
    </LocationContext.Provider>
  );
};

export const useSavedLocation = () => {
  return useContext(LocationContext);
};
