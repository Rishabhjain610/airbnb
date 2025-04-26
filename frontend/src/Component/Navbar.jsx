
import React ,{useState} from "react";
import airbnblogo1 from "../assets/airbnblogo1.png";
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
  const [isDrop,setisDrop]=useState(false);
  const toggleDrop=()=>{
    setisDrop(!isDrop);
  }
  return (
    <div className="w-full bg-white shadow-md ">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={airbnblogo1}
            alt="Airbnb Logo"
            className="h-10 cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md cursor-pointer gap-3">
          <span className="text-sm text-gray-600 px-2">Anywhere</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-600 px-2">Any week</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-400 px-2">Add guests</span>
          <button className="ml-2 bg-red-500 text-white p-2 rounded-full">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-sm text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full">
            List Your Home
          </button>
          <button className="hidden md:flex items-center text-sm text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full">
            <Globe className="w-5 h-5 text-gray-500" />
          </button>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 shadow-sm hover:shadow-md cursor-pointer "
          onClick={toggleDrop}>
            <Menu className="w-5 h-5 text-gray-500" />
            <User className="w-5 h-5 text-gray-500 ml-2" />
          </div>
          {isDrop ? (
            <div className="absolute top-22 right-30 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-10">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Trips
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Wishlist
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
            
          ):null}
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full h-[85px] bg-white flex items-center justify-center gap-6 border-t">
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <Flame className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Trending</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <Building className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Villa</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <Fence className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Farmhouse</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <BedDouble className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Rooms</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <Building2 className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Flat</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <BedSingle className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">PG</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <House className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Cabin</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-2 hover:border-black cursor-pointer">
          <Store className="w-8 h-8 text-black" />
          <h3 className="text-sm text-gray-600">Shops</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;