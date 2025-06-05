
import React from "react";

const Card = ({ title, landmark, image1, image2, image3, rent, city, id }) => {
  return (
    <div className="w-[330px] max-w-[85%] h-[460px] flex flex-col rounded-lg cursor-pointer shadow-md bg-white">
      <div className="w-full h-[67%] bg-[#2e2d2d] rounded-t-lg overflow-auto flex">
        {image1 && <img src={image1} className="w-full object-cover" alt={title} />}
        {image2 && <img src={image2} className="w-full object-cover" alt={title} />}
        {image3 && <img src={image3} className="w-full object-cover" alt={title} />}
      </div>
      <div className="w-full h-[33%] flex flex-col gap-1 p-3">
        <span className="text-[#4a3434] text-ellipsis font-semibold w-[80%]  text-sm ">
          In {landmark?.toUpperCase()},{city?.toUpperCase()}
        </span>
        <span className="text-lg font-bold text-gray-900">{title?.toUpperCase()}</span>
        <span className="text-[#f0b90b] text-[18px] font-semibold">
          ₹{rent}/month
        </span>
      </div>
    </div>
  );
};

export default Card;