import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ListingPage1 from "./pages/ListingPage1";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
        <Route path="/listingpages1" element={<ListingPage1/>}/>
       
      </Routes>
    </div>
  );
};

export default App;
