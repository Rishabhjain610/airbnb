import React, { createContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
  const serverUrl = "https://airbnb-backend-lhjp.onrender.com";

  const value = {
    serverUrl,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
