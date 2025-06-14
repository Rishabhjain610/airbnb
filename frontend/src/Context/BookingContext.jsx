import React, { useContext, createContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ListingDataContext } from "./ListingContext";
import { userDataContext } from "../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
export const bookingDataContext = createContext();
const BookingContext = ({ children }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalRent, setTotalRent] = useState(0);
  const [nights, setNights] = useState(0);
  const { serverUrl } = useContext(AuthContext);
  const { getCurrentUser } = useContext(userDataContext);

  const { getListing } = useContext(ListingDataContext);

  const [bookingData, setBookingData] = useState([]);
  const [booking, setBooking] = useState(false);
  const navigate = useNavigate();
  const handleBooking = async (id) => {
    setBooking(true);
    try {
      const result = await axios.post(
        serverUrl + `/api/booking/create/${id}`,
        {
          checkIn,
          checkOut,
          totalRent,
        },
        {
          withCredentials: true,
        }
      );
      await getCurrentUser();
      await getListing();
      console.log("Booking created successfully:", result.data.booking);
      setBookingData(result.data.booking);
      setBooking(false);
      toast.success("Booking created successfully!");
      navigate("/booked");
    } catch (error) {
      setBooking(false);
      toast.error("Error creating booking");
      console.log("Error creating booking:", error);
    }
  };
  const cancelBooking = async (id) => {
    try {
      const result = await axios.delete(
        serverUrl + `/api/booking/cancel/${id}`,
        {
          withCredentials: true,
        }
      );
      await getCurrentUser();
      await getListing();

      console.log("Booking cancelled successfully:", result.data);
      toast.success("Booking cancelled successfully!");
    } catch (error) {
      toast.error("Error cancelling booking");
      console.log("Error cancelling booking:", error);
    }
  };
  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    totalRent,
    setTotalRent,
    nights,
    setNights,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBooking,
    booking,
    setBooking,
  };
  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
};

export default BookingContext;
