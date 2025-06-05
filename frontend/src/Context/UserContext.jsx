
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios";
import {AuthContext} from './AuthContext';

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  let { serverUrl } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true
      });
      setUserData(result.data);
      console.log(result);
    } catch (error) {
      setUserData(null);
      console.log("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
},[]);

  let value = {
    userData,
    setUserData,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;