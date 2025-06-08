import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";
import MyListing from "./pages/MyListing";
import { useContext } from "react";
import { userDataContext } from "./Context/UserContext";
import ViewCard from "./pages/ViewCard";
import MyBooking from "./pages/MyBooking";
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
          // element={<ListingPage3/>}
          element={
          userData  != null?<ListingPage3/>: <Navigate to={"/login"} />
          }
        />
         <Route
          path="/mylisting"
          // element={<MyListing/>}
          element={
          userData  != null?<MyListing/>: <Navigate to={"/login"} />
          }
        />
        <Route
          path="/viewCard"
          element={
          userData  != null?<ViewCard/>: <Navigate to={"/login"} />
          }
        />
        <Route path="/mybooking" 
          element={
            userData != null ? <MyBooking /> : <Navigate to={"/login"} />
          }
        />

        

      </Routes>
    </div>
  );
};

export default App;
