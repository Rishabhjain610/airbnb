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
  let { userData, getCurrentUser, getUserData, setGetUserData } =
    useContext(userDataContext);

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative">
      <Link to="/listingpages1">
        <MoveLeft className="absolute w-12 h-12 bg-red-600 rounded-full p-2 top-6 left-8 hover:bg-red-700 text-white shadow-lg transition duration-200" />
      </Link>
      <div className="w-full flex justify-center mt-16">
        <div className="bg-white shadow-lg border border-[#908c8c] rounded-xl px-8 py-4 text-3xl text-[#613b3b] font-bold tracking-wide flex items-center justify-center max-w-xl w-full">
          My Listing
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-8 mt-12 px-4">
        {userData.userToSend.listing.length === 0 ? (
          <div className="text-gray-400 text-xl font-medium mt-20">
            No listings found. Add your first property!
          </div>
        ) : (
          userData.userToSend.listing.map((list) => (
            <div
              key={list._id}
              className="transition-transform transform hover:scale-105"
            >
              <Card
                title={list.title}
                landmark={list.landmark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyListing;
