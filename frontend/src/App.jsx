import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";
import { useContext } from "react";
import { userDataContext } from "./Context/UserContext";
const App = () => {
  const { userData } = useContext(userDataContext);
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/listingpages1"
          element={
            userData != null ? <ListingPage1 /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/listingpages2"
          element={
            userData != null ? <ListingPage2 /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/listingpages3"
          element={<ListingPage3/>}
        />
      </Routes>
    </div>
  );
};

export default App;
