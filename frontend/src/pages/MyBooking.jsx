import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../Context/UserContext";
import Card from "../Component/Card";
import { MoveLeft, CalendarCheck } from "lucide-react";
import { useEffect } from "react";

const MyBooking = () => {
  const { userData, getUserData, getCurrentUser } = useContext(userDataContext);

  // Prefer getUserData if available, else fallback to userData
  const bookings = getUserData?.booking ?? [];
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative px-2">
      {/* Back Button */}
      <Link to="/listingpages1">
        <MoveLeft className="fixed md:absolute w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full p-2 top-4 left-4 md:top-6 md:left-8 hover:bg-red-700 text-white shadow-lg transition duration-200 z-20" />
      </Link>

      {/* Title */}
      <div className="w-full flex justify-center mt-20 md:mt-16">
        <div className="bg-white shadow-xl border border-[#908c8c] rounded-2xl px-6 py-3 md:px-10 md:py-5 text-2xl md:text-3xl text-[#613b3b] font-bold tracking-wide flex items-center justify-center max-w-2xl w-full gap-3">
          <CalendarCheck className="w-8 h-8 text-red-500" />
          My Bookings
        </div>
      </div>

      {/* Bookings */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-10 md:mt-12 px-1 md:px-4">
        {bookings.length === 0 ? (
          <div className="text-gray-400 text-lg md:text-xl font-medium mt-20 text-center">
            No bookings found.
            <br />
            Book your first property!
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex justify-center w-full max-w-[95vw] sm:w-[420px] md:w-[370px] lg:w-[400px]"
            >
              <Card
                title={booking.title}
                landmark={booking.landmark}
                city={booking.city}
                image1={booking.image1}
                image2={booking.image2}
                image3={booking.image3}
                rent={booking.rent}
                id={booking.listing?._id}
                // Add more booking details if needed
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBooking;
