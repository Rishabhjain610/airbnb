
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingDataContext } from "../Context/ListingContext";
import { MoveLeft } from "lucide-react";

const ListingPage3 = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
   handleAddListing,
   adding,setAdding
  } = useContext(ListingDataContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative overflow-auto py-1">
      <Link to="/listingpages2">
        <MoveLeft className="absolute w-12 h-12 bg-red-600 rounded-full p-2 top-6 left-8 hover:bg-red-700 text-white" />
      </Link>
      <div className="w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px] mt-20">
        <h1 className="text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden">
          {landmark && city
            ? `In ${landmark.toUpperCase()} , ${city.toUpperCase()}`
            : "Location not set"}
        </h1>
      </div>
      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row ">
        <div className="w-full h-[65%] md:w-[70%] md:h-full overflow-hidden flex items-center justify-center border-1 border-white ">
          <img src={frontEndImage1} alt="" />
        </div>
        <div className="w-full h-[30%] flex items-center justify-centermd:w-[30%] md:h-[100%] md:flex-col ">
          <div className="w-full h-full overflow-hidden flex items-center justify-center border[2px] border-white">
            <img src={frontEndImage2} alt="" />
          </div>
          <div className="w-full h-full overflow-hidden flex items-center justify-center border[2px] border-white">
            <img src={frontEndImage3} alt="" />
          </div>
        </div>
      </div>
      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]">
        {`${title.toUpperCase()} ${category.toUpperCase()} , ${landmark.toUpperCase()}`}
      </div>
      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800">
        {`${description.toUpperCase()}`}
      </div>
      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]">
        {`Rs.${rent.toUpperCase()}/day`}
      </div>
      <button className="flex items-center gap-2 px-6 py-2 mb-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400  w-4/5 max-w-[500px] justify-center text-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed mt-5" onClick={handleAddListing} disabled={adding}>{adding?"adding...":"Add Listing"}</button>
    </div>
  );
};

export default ListingPage3;
