import React, { createContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:3000";

  const value = {
    serverUrl,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;