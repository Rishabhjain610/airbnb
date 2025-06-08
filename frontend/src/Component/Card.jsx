import React, { useContext,useState } from "react";
import { userDataContext } from "../Context/UserContext";
import { ListingDataContext } from "../Context/ListingContext";
import { Navigate } from "react-router-dom";
import { Star, CheckCircle2, X } from "lucide-react";
import { bookingDataContext } from "../Context/BookingContext";

const Card = ({
  title,
  landmark,
  image1,
  image2,
  image3,
  rent,
  city,
  id,
  rating,
  isBooked,
  host,
}) => {
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(ListingDataContext);
  const {cancelBooking} = useContext(bookingDataContext);
  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    } else {
      Navigate("/login");
    }
  };
  const [pop,setPop] = useState(false);
  const handleClick2=()=>{
    setPop(!pop);
  }
  // Show "cancel" only if the logged-in user is the host/creator of the card
  const isUserHost = String(userData?.userToSend?._id) === String(host);

  return (
    <div
      className="w-[330px] max-w-[85%] h-[460px] flex flex-col rounded-lg cursor-pointer shadow-md bg-white relative"
      onClick={isBooked ? undefined : handleClick}
    >
      {/* Show "cancel" badge if user is host */}
      {isUserHost && isBooked ? (
        <>
          <div className="absolute top-10 right-2 bg-white text-red-600 font-semibold rounded flex items-center gap-1 px-3 py-1 text-xs shadow z-20" onClick={handleClick2}>
            <span className="cursor-pointer">Cancel</span>
            <X className="w-4 h-4 text-red-600" />
            
          </div>
          <div className="absolute top-2 right-2 bg-white text-green-700 font-semibold rounded flex items-center gap-1 px-3 py-1 text-xs shadow z-20">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Booked
          </div>
        </>
      ) : isBooked ? (
        <div className="absolute top-2 right-2 bg-white text-green-700 font-semibold rounded flex items-center gap-1 px-3 py-1 text-xs shadow z-20">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          Booked
        </div>
      ) : (
        undefined
      )}

      {pop?<div className="w-[320px] h-[140px] bg-white/95 absolute top-[110px] left-1/2 -translate-x-1/2 rounded-xl shadow-lg flex flex-col justify-center items-center border border-red-200 z-30">
        <div className="w-full flex items-center justify-center rounded-t-xl text-lg font-bold text-[#b91c1c] p-2 border-b border-red-100">
          Booking Cancel!
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-3 py-3">
          <span className="text-[#986b6b] text-base font-semibold">
            Are You Sure?
          </span>
          <div className="flex gap-5 mt-1">
            <button className="px-5 py-1.5 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition font-semibold" onClick={()=>{cancelBooking(id)
              handleClick2
            }}>
              Yes
            </button>
            <button className="px-5 py-1.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition font-semibold" onClick={handleClick2}>
              No
            </button>
          </div>
        </div>
      </div>:""}
      <div className="w-full h-[77%] bg-[#2e2d2d] rounded-t-lg overflow-auto flex">
        {image1 && (
          <img src={image1} className="w-full object-cover" alt={title} />
        )}
        {image2 && (
          <img src={image2} className="w-full object-cover" alt={title} />
        )}
        {image3 && (
          <img src={image3} className="w-full object-cover" alt={title} />
        )}
      </div>

      <div className="w-full flex flex-col gap-1 p-3">
        <span className="text-[#4a3434] text-ellipsis font-semibold w-[80%] text-sm ">
          In {landmark?.toUpperCase()},{city?.toUpperCase()}
        </span>
        <span className="text-lg font-bold text-gray-900">
          {title?.toUpperCase()}
        </span>
        <span className="flex items-center justify-between">
          <span className="text-[#f0b90b] text-[18px] font-semibold">
            ₹{rent}/month
          </span>
          <span className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-800 text-sm font-semibold">
              {rating || 0}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
