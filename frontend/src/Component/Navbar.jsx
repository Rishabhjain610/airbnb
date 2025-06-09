import React, { useState, useContext } from "react";
import airbnblogo1 from "../assets/airbnblogo1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { ListingDataContext } from "../Context/ListingContext";
import { toast } from "react-toastify";
import {
  Search,
  Globe,
  Menu,
  User,
  Flame,
  Building,
  Fence,
  BedDouble,
  Building2,
  BedSingle,
  House,
  Store,
} from "lucide-react";

const Navbar = () => {
  const [isDrop, setisDrop] = useState(false);
  const toggleDrop = () => setisDrop(!isDrop);
  let { serverUrl } = useContext(AuthContext);
  let { userData, setUserData } = useContext(userDataContext);
  const { listingData, setNewListingData } = useContext(ListingDataContext);
  const [cate, setCate] = useState();
  let navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      toast.success(result.data.message);
      setUserData(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (category) => {
    setCate(category);
    if (category === "trending") {
      setNewListingData(listingData);
    } else {
      setNewListingData(
        listingData.filter((item) => item.category === category)
      );
    }
  };

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center">
          <img
            src={airbnblogo1}
            alt="Airbnb Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-full px-2 sm:px-4 py-2 shadow-sm hover:shadow-md cursor-pointer gap-3 sm:gap-0 w-full max-w-md">
            <span className="hidden sm:inline text-sm text-gray-600 px-2">
              Anywhere
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            {/* Make "Any week" always in a single line */}
            <span className="hidden sm:inline text-sm text-gray-600 px-2 whitespace-nowrap">
              Any week
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="hidden sm:inline text-sm text-gray-400 px-2 whitespace-nowrap">
              Add guests
            </span>
            <input
              type="text"
              className="outline-none bg-transparent hover:bg-gray-100 rounded-full py-2 px-2 sm:px-3 w-full min-w-0"
              placeholder="Search"
            />
            <button className="ml-1 sm:ml-2 bg-red-500 text-white p-2 rounded-full">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center space-x-2 sm:space-x-4 ml-2">
          <button
            className="hidden md:flex items-center text-sm text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full"
            onClick={() => navigate("/listingpages1")}
          >
            List Your Home
          </button>
          <button className="hidden md:flex items-center text-sm text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full">
            <Globe className="w-5 h-5 text-gray-500" />
          </button>
          <div
            className="flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm hover:shadow-md cursor-pointer"
            onClick={toggleDrop}
          >
            <Menu className="w-5 h-5 text-gray-500" />
            {userData == null ? (
              <User className="w-5 h-5 text-gray-500 ml-2" />
            ) : (
              <span className="w-[30px] h-[30px] ml-2 bg-[#080808] text-white rounded-full flex items-center justify-center">
                {userData.userToSend?.name.slice(0, 1).toUpperCase()}
              </span>
            )}
          </div>
          {isDrop ? (
            <div className="absolute top-20 right-3 lg:right-48 bg-gray-100 border border-gray-300 rounded-lg shadow-lg w-48 z-10">
              <ul className="flex flex-col gap-1 p-1">
                <div className="bg-white">
                  {!userData ? (
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      to="/login"
                    >
                      Login
                    </Link>
                  ) : (
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogOut}
                      type="button"
                    >
                      Logout
                    </button>
                  )}
                </div>
                <div className="bg-white flex flex-col">
                  <Link
                    to="/listingpages1"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setisDrop(false)}
                  >
                    List Your Home
                  </Link>
                  <Link
                    to="/mylisting"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setisDrop(false)}
                  >
                    My Listing
                  </Link>
                  <Link
                    to="/mybooking"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setisDrop(false)}
                  >
                    Check Booking
                  </Link>
                </div>
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full shadow-sm pt-[5px] md:h-[85px] bg-white flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-6 border-t">
        <div
          className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer"
          onClick={() => {
            handleCategory("trending");
            setCate("");
          }}
        >
          <Flame className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Trending</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "villa" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("villa")}
        >
          <Building className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Villa</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "farmhouse" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("farmhouse")}
        >
          <Fence className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Farmhouse</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "rooms" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("rooms")}
        >
          <BedDouble className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Rooms</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "flat" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("flat")}
        >
          <Building2 className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Flat</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "pg" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("pg")}
        >
          <BedSingle className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">PG</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "cabin" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("cabin")}
        >
          <House className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Cabin</h3>
        </div>
        <div
          className={`flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer ${
            cate === "shops" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleCategory("shops")}
        >
          <Store className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Shops</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
