
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingDataContext } from "../Context/ListingContext";
import { userDataContext } from "../Context/UserContext";
import { MoveLeft, Pencil, CalendarCheck } from "lucide-react";

const ViewCard = () => {
  const { cardDetails } = useContext(ListingDataContext);
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();

  if (!cardDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-gray-100">
        <div className="text-gray-500 text-xl">No details found.</div>
      </div>
    );
  }

  const isHost = userData.userToSend._id === cardDetails.host;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative overflow-auto py-1">
      <Link to="/">
        <MoveLeft className="absolute w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full p-2 top-4 left-4 hover:bg-red-700 text-white z-20" />
      </Link>
      <div className="w-full flex justify-center mt-14 md:mt-10">
        <h1 className="text-center text-[22px] md:text-[32px] font-bold text-[#272727] max-w-2xl px-2 truncate">
          {`In ${cardDetails.landmark?.toUpperCase()} , ${cardDetails.city?.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-6 md:mt-10 px-2 md:px-0">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-[320px] md:h-[420px] rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white">
          <div className="w-full md:w-1/2 h-2/3 md:h-full">
            <img
              src={cardDetails.image1}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-row md:flex-col w-full md:w-1/2 h-1/3 md:h-full">
            <div className="w-1/2 md:w-full h-full md:h-1/2">
              <img
                src={cardDetails.image2}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 md:w-full h-full md:h-1/2">
              <img
                src={cardDetails.image3}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-8 gap-2 px-2">
        <div className="text-center text-[18px] md:text-[25px] font-semibold text-[#613b3b]">
          {`${cardDetails.title?.toUpperCase()} ${cardDetails.category?.toUpperCase()} , ${cardDetails.landmark?.toUpperCase()}`}
        </div>
        <div className="text-center text-[16px] md:text-[20px] text-gray-800">
          {`${cardDetails.description?.toUpperCase()}`}
        </div>
        <div className="text-center text-[18px] md:text-[25px] text-red-600 font-bold">
          {`Rs.${cardDetails.rent}/day`}
        </div>
      </div>
      <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 max-w-[400px] w-4/5 justify-center text-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed mt-7 shadow">
        {isHost ? (
          <>
            <Pencil className="w-5 h-5" />
            Edit
          </>
        ) : (
          <>
            <CalendarCheck className="w-5 h-5" />
            Book Now
          </>
        )}
      </button>
    </div>
  );
};

export default ViewCard;
