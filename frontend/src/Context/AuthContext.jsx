import React, { createContext, useContext } from "react";
export const AuthContext = createContext();

const AuthContext = (children) => {
  let serverUrl="http://localhost:3000"
  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContext;
