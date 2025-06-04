import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Building,
  Fence,
  BedDouble,
  Building2,
  BedSingle,
  House,
  Store,
  MoveLeft,
  Waves,
  ArrowRight,
  ArrowRightFromLine
} from "lucide-react";

const ListingPage2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full  bg-gradient-to-br from-red-100 via-white to-gray-100 relative">
      <Link to="/listingpages1">
        <MoveLeft className="absolute w-12 h-12 bg-red-600 rounded-full p-2 top-6 left-8 hover:bg-red-700 text-white" />
      </Link>
      <div className="w-[200px] h-10 text-xl bg-red-600 text-white flex items-center justify-center rounded-full absolute top-5 right-3 shadow-xl ">
        SetUp Your Category
      </div>

      <div className="w-18/19 md:w-[1000px] md:p-14 p-4 bg-white md:rounded-3xl mx-1 md:mx-10 shadow-2xl my-20 md:my-20 flex flex-col rounded-4xl items-center border border-gray-200">
        <span className="mb-10 md:text-3xl text-xl text-center text-gray-700 font-medium">
          Which of these best describes your place?
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 justify-center w-full">
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <Waves className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Pool House
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <Building className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Villa
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <Fence className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Farmhouse
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <BedDouble className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Rooms
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <Building2 className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Flat
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <BedSingle className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">PG</span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <House className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Cabin
            </span>
          </div>
          <div className="w-full h-40 bg-gray-100 border-2 border-transparent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:bg-red-50 transition-all shadow-sm">
            <Store className="w-14 h-14 text-red-500" />
            <span className="mt-4 text-gray-800 font-semibold text-lg">
              Shops
            </span>
          </div>
          <div className="col-span-2 md:col-span-4 flex justify-center mt-6">
            <Link
              to="/listingpages2"
              className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 max-w-[800px] w-full justify-center text-lg font-semibold transition"
            >
              Next
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage2;
