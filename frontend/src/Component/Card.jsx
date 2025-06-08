
import React, { useContext } from "react";
import { userDataContext } from "../Context/UserContext";
import { ListingDataContext } from "../Context/ListingContext";
import { Navigate } from "react-router-dom";
import { Star } from "lucide-react"; 

const Card = ({ title, landmark, image1, image2, image3, rent, city, id, rating }) => {
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(ListingDataContext);
  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    } else {
      Navigate('/login');
    }
  };

  return (
    <div className="w-[330px] max-w-[85%] h-[460px] flex flex-col rounded-lg cursor-pointer shadow-md bg-white" onClick={handleClick}>
      <div className="w-full h-[77%] bg-[#2e2d2d] rounded-t-lg overflow-auto flex">
        {image1 && <img src={image1} className="w-full object-cover" alt={title} />}
        {image2 && <img src={image2} className="w-full object-cover" alt={title} />}
        {image3 && <img src={image3} className="w-full object-cover" alt={title} />}
      </div>
      
      <div className="w-full  flex flex-col gap-1 p-3">
        <span className="text-[#4a3434] text-ellipsis font-semibold w-[80%] text-sm ">
          In {landmark?.toUpperCase()},{city?.toUpperCase()}
        </span>
        <span className="text-lg font-bold text-gray-900">{title?.toUpperCase()}</span>
        <span className="flex items-center justify-between">
          <span className="text-[#f0b90b] text-[18px] font-semibold">
            ₹{rent}/month
          </span>
          <span className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-800 text-sm font-semibold">{rating || 0}</span>
          </span>
        </span>
      </div>

    </div>
  );
};

export default Card;
