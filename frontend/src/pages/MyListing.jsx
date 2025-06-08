
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../Context/UserContext";
import Card from "../Component/Card";
import { MoveLeft, Building2 } from "lucide-react";

const MyListing = () => {
  let { userData } = useContext(userDataContext);

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative px-2">
      {/* Back Button */}
      <Link to="/listingpages1">
        <MoveLeft className="fixed md:absolute w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full p-2 top-4 left-4 md:top-6 md:left-8 hover:bg-red-700 text-white shadow-lg transition duration-200 z-20" />
      </Link>

      {/* Title */}
      <div className="w-full flex justify-center mt-20 md:mt-16">
        <div className="bg-white shadow-xl border border-[#908c8c] rounded-2xl px-6 py-3 md:px-10 md:py-5 text-2xl md:text-3xl text-[#613b3b] font-bold tracking-wide flex items-center justify-center max-w-2xl w-full gap-3">
          <Building2 className="w-8 h-8 text-red-500" />
          My Listing
        </div>
      </div>

      {/* Listings */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-10 md:mt-12 px-1 md:px-4">
        {userData?.userToSend?.listing?.length === 0 ? (
          <div className="text-gray-400 text-lg md:text-xl font-medium mt-20 text-center">
            No listings found.
            <br />
            Add your first property!
          </div>
        ) : (
          userData?.userToSend?.listing?.map((list) => (
            <div
              key={list._id}
              className="flex justify-center w-full max-w-[95vw] sm:w-[420px] md:w-[370px] lg:w-[400px]"
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
                isBooked={list.isBooked}
                host={list.host}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyListing;
