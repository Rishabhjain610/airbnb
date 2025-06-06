
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios";
import {AuthContext} from './AuthContext';

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  let { serverUrl } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [getUserData, setGetUserData] = useState(null);
//   const getCurrentUser = async () => {
//     try {
//       let result = await axios.get(serverUrl + "/api/user/currentuser", {
//         withCredentials: true
//       });
      
//       console.log("hi yeh getcurrentuserhai",result.data);
//       setGetUserData(result.data);
     
      
//     } catch (error) {
//       setGetUserData(null);
//       console.log("Error fetching current user:", error);
//     }
//   };

//   useEffect(() => {
//     getCurrentUser();
//     console.log("UserContext useEffect called");
// },[]);//bluder hai yeh sirf website reload hone par chalega

  let value = {
    userData,
    setUserData,
    
    getUserData,
    setGetUserData
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;