import React, { useContext, useState } from "react";
import { CheckCircle2, Star } from "lucide-react";
import { bookingDataContext } from "../Context/BookingContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { ListingDataContext } from "../Context/ListingContext";
import { toast } from "react-toastify";
const Booked = () => {
  const { bookingData } = useContext(bookingDataContext);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(AuthContext);
  const { getCurrentUser } = useContext(userDataContext);
  const { getListing, cardDetails } = useContext(ListingDataContext);

  const handleRating = (value) => {
    if (!submitted) setRating(value);
  };
  const handleRatings = async (id) => {
    try {
      const result = await axios.post(
        serverUrl + `/api/listing/rating/${id}`,
        { rating },
        {
          withCredentials: true,
        }
      );
      await getListing();
      await getCurrentUser();
      console.log("Rating submitted successfully:", result.data);
      setSubmitted(true);
      toast.success("Thank you for your rating!");
      navigate("/");
    } catch (error) {
      toast.error("Error submitting rating");
      console.log("Error submitting rating:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative overflow-auto px-2">
      {/* Back to Home button always at top right */}
      <button
        className="fixed top-4 right-4 z-50 px-5 py-2 bg-red-600 text-white rounded-lg font-semibold shadow hover:bg-red-700 transition"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

      <div className="w-full max-w-lg bg-white flex items-center justify-center border border-[#b5b5b5] flex-col gap-8 p-4 sm:p-8 rounded-lg shadow-lg mt-8">
        <div className="flex flex-col items-center gap-2">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
          <span className="text-2xl font-bold text-green-700 text-center">
            Booking Confirmed!
          </span>
        </div>
        <div className="w-full flex flex-col gap-3 text-gray-700 text-base">
          <div>
            <span className="font-semibold">Booking ID:</span>{" "}
            <span className="break-all">{bookingData?._id || "-"}</span>
          </div>
          <div>
            <span className="font-semibold">Owner Name:</span>{" "}
            {bookingData?.host?.name || "-"}
          </div>
          <div>
            <span className="font-semibold">Owner Email:</span>{" "}
            <span className="break-all">{bookingData?.host?.email || "-"}</span>
          </div>
          <div>
            <span className="font-semibold">Check-in Date:</span>{" "}
            {bookingData?.checkIn
              ? new Date(bookingData.checkIn).toLocaleDateString()
              : "-"}
          </div>
          <div>
            <span className="font-semibold">Total Rent:</span> ₹
            {bookingData?.totalRent || "-"}
          </div>
        </div>
      </div>
      {/* Rating Option */}
      <div className="w-full max-w-lg mt-6 bg-white flex flex-col items-center justify-center border border-[#b5b5b5] gap-4 p-4 sm:p-6 rounded-lg shadow-lg mb-8">
        <span className="text-lg font-semibold text-gray-800 text-center">
          Rate Your Experience
        </span>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((val) => (
            <Star
              key={val}
              className={`w-8 h-8 cursor-pointer transition ${
                rating >= val
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => handleRating(val)}
            />
          ))}
        </div>
        <button
          className="mt-2 px-6 py-2 bg-[red] text-white rounded-lg font-semibold shadow hover:bg-red-800 transition w-full sm:w-auto"
          onClick={() => handleRatings(cardDetails?._id)}
          disabled={submitted || rating === 0}
        >
          {submitted ? "Thank you for rating!" : "Submit Rating"}
        </button>
      </div>
    </div>
  );
};

export default Booked;
