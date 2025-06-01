// import React ,{createContext,use,useState} from 'react'
// import { useContext } from 'react';
// import AuthContext from './AuthContext';
// export const userDataContext = createContext();
// const UserContext = ({children}) => {
//   let {serverUrl}=useContext(AuthContext);
//   const [userData, setUserData] = useState(null);
//   const getCurrentUser=async()=>{
//     try {
//       let result= await axios.get(serverUrl+"/api/user/currentuser",{

//         withCredentials: true // This is important to include cookies in the request
//       });
//       setUserData(result.data)
      
//     } catch (error) {
//       setUserData(null);
//       console.error("Error fetching current user:", error);
      
//     }
//     useEffect(() => {
//       getCurrentUser();
//     });
//   }
//   let value={
//     userData,
//     setUserData,
//   }
//   return (
//     <div>
//       <userDataContext.Provider value={value}>
//         {children}
//       </userDataContext.Provider>
//     </div>
//   )
// }

// export default UserContext
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios";
import AuthContext from './AuthContext';

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
    } catch (error) {
      setUserData(null);
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
});

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