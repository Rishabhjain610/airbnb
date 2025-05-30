import React ,{createContext,useState} from 'react'
import { useContext } from 'react';
export const userDataContext = createContext();
const UserContext = ({children}) => {
  let {serverUrl}=useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const getCurrentUser=async()=>{
    try {
      let 
      
    } catch (error) {
      console.error("Error fetching current user:", error);
      
    }
  }
  let value={
    
  }
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
