import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2"; // Assuming you have this page
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
        <Route path="/listingpages1" element={<ListingPage1/>}/>
        <Route path="/listingpages2" element={<ListingPage2/>}/>
      </Routes>
    </div>
  );
};

export default App;
