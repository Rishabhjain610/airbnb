import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingDataContext } from "../Context/ListingContext";
import { userDataContext } from "../Context/UserContext";
import Card from "../Component/Card";
import {
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
} from "lucide-react";
const MyListing = () => {
  let { userData } = useContext(userDataContext);
  return (
    <div className="min-h-screen flex items-start justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative">
      <Link to="/listingpages1">
        <MoveLeft className="absolute w-12 h-12 bg-red-600 rounded-full p-2 top-6 left-8 hover:bg-red-700 text-white" />
      </Link>
      <div className="w-1/2 h-[10%] border-1 border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-5 md:w-[600px]">
        My Listing
      </div>
      <div className="w-full h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-10">
        {userData.map((list) => (
          <Card
            key={list._id}
            title={list.title}
            landmark={list.landmark}
            city={list.city}
            image1={list.image1}
            image2={list.image2}
            image3={list.image3}
            rent={list.rent}
            id={list._id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyListing;
