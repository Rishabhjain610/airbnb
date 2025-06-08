
import React, { useContext } from "react";
import Navbar from "../Component/Navbar";
import { ListingDataContext } from "../Context/ListingContext";
import Card from "../Component/Card";

const Home = () => {
  const { listingData,newListData } = useContext(ListingDataContext);

  return (
    <div>
      <Navbar />
      <div className="w-screen min-h-[77vh] flex items-center justify-center gap-5 flex-wrap mt-[250px] md:mt-[180px]">
        
        {
          newListData.map((list) => (
            <Card
              key={list._id}
              title={list.title}
              landmark={list.landmark}
              city={list.city}
              image1={list.image1}
              image2={list.image2}
              image3={list.image3}
              rent={list.rent}
              rating={list.rating}
              id={list._id}
              isBooked={list.isBooked}
              host={list.host}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
